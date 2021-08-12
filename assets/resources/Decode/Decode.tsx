import moment from "moment";
import "moment/min/locales";

const deviceLocale = "es";

export const decode_utf8 = (s: string) => {
  return decodeURIComponent(escape(s));
};

export const removeAccents = (str: any) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const firsLetterUpperCase = (str: any) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const shuffleObject = (sourceArray: any) => {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));

    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
};

export const makeid = () => {
  return Math.floor(Math.random() * 10000);
};

export const getMissingDates = (item: any) => {
  let arr: any = [];
  let arrStartEnd: any = [];
  arr.push(
    {
      date: item.date_check_in,
    },
    {
      date: item.date_check_out,
    }
  );
  arrStartEnd.push(item.date_check_in, item.date_check_out);
  let result = arr
    .sort(function (a, b) {
      return Date.parse(a.date) - Date.parse(b.date);
    })
    .reduce(
      (function (hash) {
        return function (p, c) {
          let missingDaysNo =
            (Date.parse(c.date) - hash.prev) / (1000 * 3600 * 24);
          if (hash.prev && missingDaysNo > 1) {
            for (var i = 1; i < missingDaysNo; i++)
              p.push(
                moment(new Date(hash.prev + i * (1000 * 3600 * 24))).format("L")
              );
          }
          hash.prev = Date.parse(c.date);
          return p;
        };
      })(Object.create(null)),
      []
    );
  for (let i in arrStartEnd) {
    result.push(moment(arrStartEnd[i]).format("L"));
  }
  return result;
};
