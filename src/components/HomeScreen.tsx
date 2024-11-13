import { EventData, ScrollView, SearchBar } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { PropertyCard } from './PropertyCard';
import { Sidebar } from './Sidebar';

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const [searchQuery, setSearchQuery] = React.useState("");

    const onSearchSubmit = (args: EventData) => {
        const searchBar = args.object as SearchBar;
        console.log("Search submitted with query:", searchBar.text);
    };

    return (
        <gridLayout columns="300, *" rows="*">
            <Sidebar col={0} />
            
            <scrollView col={1}>
                <flexboxLayout style={styles.container}>
                    <stackLayout style={styles.searchContainer}>
                        <searchBar
                            hint="Search properties in Dubai..."
                            text={searchQuery}
                            onTextChange={(args) => setSearchQuery(args.object.text)}
                            onSubmit={onSearchSubmit}
                            style={styles.searchBar}
                        />
                    </stackLayout>

                    <stackLayout style={styles.featuredSection}>
                        <label className="text-2xl font-bold p-4">
                            Featured Properties
                        </label>
                        
                        <gridLayout columns="*, *, *" rows="auto" style={styles.propertiesGrid}>
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <PropertyCard 
                                    key={item}
                                    col={(item - 1) % 3}
                                    row={Math.floor((item - 1) / 3)}
                                    property={{
                                        id: item.toString(),
                                        title: `Luxury Apartment ${item}`,
                                        price: 1500000,
                                        location: 'Dubai Marina',
                                        bedrooms: 2,
                                        bathrooms: 2,
                                        area: 1200,
                                        imageUrl: 'https://via.placeholder.com/300x200'
                                    }}
                                    onTap={() => navigation.navigate('PropertyDetails', { propertyId: item.toString() })}
                                />
                            ))}
                        </gridLayout>
                    </stackLayout>
                </flexboxLayout>
            </scrollView>
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    searchContainer: {
        padding: 16,
        backgroundColor: "white",
    },
    searchBar: {
        height: 50,
        fontSize: 16,
    },
    featuredSection: {
        margin: 16,
    },
    propertiesGrid: {
        margin: 8,
    }
});