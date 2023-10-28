import axios from "axios";
import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';
import { fetchBreeds } from "./cat-api.js"

axios.defaults.headers.common["x-api-key"] = "live_pLFsKr3BoHrT6i9dasqBQMO6tOhQcD76K2Vhyy0hO26KVmnqZHxcrfVnIPjU7tfX";

// new SlimSelect({
//   select: '.breed-select'
// })

function catGallery() {
  const BASE = "https://api.thecatapi.com/v1/images/search"

}

// curl --location 'https://api.thecatapi.com/v1/images/search?format=json&limit=10' \
// --header 'Content-Type: application/json' \
// --header 'x-api-key: example-api-key'
