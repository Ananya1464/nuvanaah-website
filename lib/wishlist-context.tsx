'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface WishlistItem {
    id: string
    name: string
    tagline: string
    price: number
    category: string
}

interface WishlistContextType {
    items: WishlistItem[]
    itemCount: number
    addItem: (item: WishlistItem) => void
    removeItem: (id: string) => void
    isInWishlist: (id: string) => boolean
    toggleItem: (item: WishlistItem) => void
    clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<WishlistItem[]>([])
    const [isInitialized, setIsInitialized] = useState(false)

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem('nuvanaah-wishlist')
        if (savedWishlist) {
            try {
                const parsed = JSON.parse(savedWishlist)
                setItems(parsed)
            } catch (e) {
                console.error('Failed to parse wishlist from localStorage:', e)
            }
        }
        setIsInitialized(true)
    }, [])

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('nuvanaah-wishlist', JSON.stringify(items))
        }
    }, [items, isInitialized])

    const addItem = (item: WishlistItem) => {
        setItems((prev) => {
            // Check if item already exists
            if (prev.some((i) => i.id === item.id)) {
                return prev
            }
            return [...prev, item]
        })
    }

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id))
    }

    const isInWishlist = (id: string) => {
        return items.some((item) => item.id === id)
    }

    const toggleItem = (item: WishlistItem) => {
        if (isInWishlist(item.id)) {
            removeItem(item.id)
        } else {
            addItem(item)
        }
    }

    const clearWishlist = () => {
        setItems([])
    }

    const itemCount = items.length

    return (
        <WishlistContext.Provider
            value={{
                items,
                itemCount,
                addItem,
                removeItem,
                isInWishlist,
                toggleItem,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

export function useWishlist() {
    const context = useContext(WishlistContext)
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider')
    }
    return context
}
