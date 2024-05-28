interface VerPreciosProps {
    originCity: string;
    destinationCity: string;
    adults: number;
    child: number;
    infants: number;
    tripType: string;
    departureDate: string;
    arrivalDate: string;
    applyFilter?: (filter: string) => void;
}