export type MainStackParamList = {
    Home: undefined;
    PropertyDetails: {
        propertyId: string;
    };
    Search: {
        query?: string;
        filters?: {
            minPrice?: number;
            maxPrice?: number;
            location?: string;
        };
    };
};