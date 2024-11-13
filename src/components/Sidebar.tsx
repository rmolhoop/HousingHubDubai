import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface SidebarProps {
    col?: number;
    row?: number;
}

export function Sidebar({ col, row }: SidebarProps) {
    return (
        <stackLayout style={styles.sidebar} col={col} row={row}>
            <label className="text-2xl font-bold p-4">
                HousingHub Dubai
            </label>

            <stackLayout style={styles.filterSection}>
                <label className="text-lg font-semibold p-4">
                    Filters
                </label>

                <stackLayout style={styles.filterGroup}>
                    <label className="font-medium p-2">Price Range</label>
                    <textField hint="Min Price" keyboardType="number" className="input" />
                    <textField hint="Max Price" keyboardType="number" className="input" />
                </stackLayout>

                <stackLayout style={styles.filterGroup}>
                    <label className="font-medium p-2">Location</label>
                    <listView height="150" style={styles.locationList}>
                        {['Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 'JBR', 'Business Bay'].map((location) => (
                            <stackLayout key={location} style={styles.locationItem}>
                                <label>{location}</label>
                            </stackLayout>
                        ))}
                    </listView>
                </stackLayout>

                <stackLayout style={styles.filterGroup}>
                    <label className="font-medium p-2">Property Type</label>
                    <listView height="100" style={styles.propertyTypeList}>
                        {['Apartment', 'Villa', 'Penthouse', 'Townhouse'].map((type) => (
                            <stackLayout key={type} style={styles.propertyTypeItem}>
                                <label>{type}</label>
                            </stackLayout>
                        ))}
                    </listView>
                </stackLayout>

                <button className="bg-blue-500 text-white m-4">
                    Apply Filters
                </button>
            </stackLayout>
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    sidebar: {
        backgroundColor: "#f8fafc",
        borderRightWidth: 1,
        borderRightColor: "#e2e8f0",
    },
    filterSection: {
        padding: 16,
    },
    filterGroup: {
        marginBottom: 16,
    },
    locationList: {
        backgroundColor: "white",
        borderRadius: 4,
    },
    locationItem: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#e2e8f0",
    },
    propertyTypeList: {
        backgroundColor: "white",
        borderRadius: 4,
    },
    propertyTypeItem: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#e2e8f0",
    }
});