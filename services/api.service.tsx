import axios from "axios";
import { shuffleObject, makeid } from "../assets/resources/Decode/Decode";
import { Cards } from "../interfaces/cards.interfaces";
import { Reservations } from "../interfaces/reservations.interface";

//Variables ready to be used in your real project
//PROD
//const server = "";
//TEST
const server = "http://localhost:3000/";

export const getUser = async (email: string, password: string) => {
  try {
    const response = await axios.get(
      server + `dataUsers?email=${email}&password=${password}`
    );

    return response.data;
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const getPlaces = async (lat: String, long: String) => {
  try {
    const response = await axios.get(server + "dataPlaces");
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const getReservations = async (id_user: number) => {
  try {
    const responsePlaces = await axios.get(server + "dataPlaces");
    const responseReservations = await axios.get(
      server + `dataReservations?id_user=${id_user}`
    );

    let dataReservationsObject: Reservations[] = [];
    for (let i in responseReservations.data) {
      for (let j in responsePlaces.data) {
        if (
          responsePlaces.data[j].id === responseReservations.data[i].id_place
        ) {
          dataReservationsObject.push({
            place: responsePlaces.data[j],
            reservation: responseReservations.data[i],
          });
        }
      }
    }

    return dataReservationsObject;
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const getDisabledDates = async (id_place: number) => {
  try {
    const response = await axios.get(
      server + `dataReservations?complete=0&id_place=${id_place}`
    );

    return response.data;
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const getuserCards = async (id_user: number) => {
  try {
    const responseCards = await axios.get(
      server + `dataUserCards?id_user=${id_user}`
    );

    return responseCards.data;
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const getActiveuserCard = async (id_user: number) => {
  try {
    const responseCards = await axios.get(
      server + `dataUserCards?id_user=${id_user}&active=1`
    );

    return responseCards.data;
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const insertCardUser = async (
  id_user: number,
  card: string,
  type: string
) => {
  try {
    const responseUpdate = await axios.get(
      server + `dataUserCards?id_user=${id_user}&active=1`
    );

    for (let i in responseUpdate.data) {
      const updateCards = await axios.patch(
        server + `dataUserCards/${responseUpdate.data[i].id}`,
        {
          active: 0,
        }
      );
    }

    const response = await axios.post(server + "dataUserCards", {
      id: makeid(),
      id_user: id_user,
      card: "XXXX XXXX XXXX " + card.substr(card.length - 4),
      type: type,
      active: 1,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return 1;
    }

    return 1;
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const insertReservation = async (
  id_user: number,
  id_place: number,
  date_check_in: string,
  date_check_out: string,
  email: string,
  name: string
) => {
  try {
    const response = await axios.post(server + "dataReservations", {
      id: makeid(),
      id_user: id_user,
      id_place: id_place,
      date_check_in: date_check_in,
      date_check_out: date_check_out,
      complete: 0,
      name: name,
      email: email,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return 1;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const editReservation = async (id: string, complete: number) => {
  try {
    const responseUpdate = await axios.patch(
      server + `dataReservations/${id}`,
      {
        complete: complete,
      }
    );
    if (responseUpdate.data === 0) {
      return 0;
    } else {
      return 1;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const insertUser = async (
  email: string,
  name: string,
  last_name: string,
  password: string
) => {
  try {
    const response = await axios.post(server + "dataUsers", {
      id: makeid(),
      name: name,
      last_name: last_name,
      email: email,
      password: password,
      type: 1,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const getPlacesHost = async (id_user: number) => {
  try {
    const responsePlaces = await axios.get(
      server + `dataPlaces?id_user=${id_user}`
    );

    return responsePlaces.data;
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const getPlacesReservations = async (id_place: number) => {
  try {
    const responsePlaces = await axios.get(
      server + `dataReservations?id_place=${id_place}`
    );

    return responsePlaces.data;
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};
