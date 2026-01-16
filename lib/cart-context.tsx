'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Types
export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image?: string
}

interface CartContextType {
    items: CartItem[]
    itemCount: number
    total: number
    addItem: (item: Omit<CartItem, 'quantity'>) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Provider component
export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('nuvanaah-cart')
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error('Failed to parse cart from localStorage')
            }
        }
        setIsLoaded(true)
    }, [])

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('nuvanaah-cart', JSON.stringify(items))
        }
    }, [items, isLoaded])

    // Calculate item count
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

    // Calculate total
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    // Add item to cart
    const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(item => item.id === newItem.id)
            if (existingItem) {
                return currentItems.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...currentItems, { ...newItem, quantity: 1 }]
        })
    }

    // Remove item from cart
    const removeItem = (id: string) => {
        setItems(currentItems => currentItems.filter(item => item.id !== id))
    }

    // Update item quantity
    const updateQuantity = (id: string, quantity: number) => {
        if (quantity < 1) {
            removeItem(id)
            return
        }
        setItems(currentItems =>
            currentItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        )
    }

    // Clear cart
    const clearCart = () => {
        setItems([])
    }

    return (
        <CartContext.Provider
            value={{
                items,
                itemCount,
                total,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

// Hook to use cart context
export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
