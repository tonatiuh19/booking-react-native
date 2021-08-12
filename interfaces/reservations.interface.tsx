export interface Image {
  id: number;
  url: string;
}

export interface Place {
  id: number;
  type: number;
  title: string;
  price: number;
  placeDescription: string;
  locationCity: string;
  locationState: string;
  lat: string;
  long: string;
  images: Image[];
}

export interface Reservation {
  id: string;
  id_user: number;
  id_place: number;
  date_check_in: string;
  date_check_out: string;
}

export interface Reservations {
  place: Place;
  reservation: Reservation;
}
