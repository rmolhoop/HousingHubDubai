import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface Property {
    id: string;
    title: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    imageUrl: string;
}

interface PropertyCardProps {
    property: Property;
    onTap: () => void;
    row?: number;
    col?: number;
}

export function PropertyCard({ property, onTap, row, col }: PropertyCardProps) {
    return (
        <stackLayout 
            style={styles.card} 
            row={row} 
            col={col}
            onTap={onTap}
            className="property-card"
        >
            <image
                src={property.imageUrl}
                style={styles.image}
            />
            <stackLayout style={styles.content}>
                <label className="text-lg font-bold" style={styles.title}>
                    {property.title}
                </label>
                <label className="text-blue-500 font-semibold">
                    AED {property.price.toLocaleString()}
                </label>
                <label className="text-gray-600">
                    {property.location}
                </label>
                <gridLayout columns="auto, auto, auto" style={styles.details}>
                    <label col={0} className="text-gray-600">
                        {property.bedrooms} beds
                    </label>
                    <label col={1} className="text-gray-600">
                        {property.bathrooms} baths
                    </label>
                    <label col={2} className="text-gray-600">
                        {property.area} sq.ft
                    </label>
                </gridLayout>
            </stackLayout>
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 8,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 2,
    },
    image: {
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        stretch: "aspectFill",
    },
    content: {
        padding: 16,
    },
    title: {
        marginBottom: 4,
    },
    details: {
        marginTop: 8,
        columnGap: 16,
    }
});