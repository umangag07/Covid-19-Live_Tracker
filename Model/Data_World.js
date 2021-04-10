const mongoose = require("mongoose");

const World_Schema = mongoose.Schema({
  updated: {
    type: Number,
    default: 0,
  },
  country: {
    type: String,
    required: true,
  },
  countryInfo: {
    _id: { type: Number },
    iso2: { type: String },
    iso3: { type: String },
    lat: { type: Number },
    long: { type: Number },
    flag: { type: String },
  },
  cases: {
    type: Number,
    default: 0,
  },
  todayCases: {
    type: Number,
    default: 0,
  },
  deaths: {
    type: Number,
    default: 0,
  },
  todayDeaths: {
    type: Number,
    default: 0,
  },
  critical: {
    type: Number,
    default: 0,
  },
  casesPerOneMillion: {
    type: Number,
    default: 0,
  },
  deathsPerOneMillion: {
    type: Number,
    default: 0,
  },
  tests: {
    type: Number,
    default: 0,
  },
  testsPerOneMillion: {
    type: Number,
    default: 0,
  },
  population: {
    type: Number,
    default: 0,
  },
  continent: {
    type: String,
    default: "",
  },
  oneCasePerPeople: {
    type: Number,
    default: 0,
  },
  oneDeathPerPeople: {
    type: Number,
    default: 0,
  },
  oneTestPerPeople: {
    type: Number,
    default: 0,
  },
  activePerOneMillion: {
    type: Number,
    default: 0,
  },
  recoveredPerOneMillion: {
    type: Number,
    default: 0,
  },
  criticalPerOneMillion: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Covid_Data_World_", World_Schema);