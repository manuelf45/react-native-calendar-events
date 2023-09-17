import { NativeModules, Platform, processColor } from "react-native";

const RNCalendarEvents = NativeModules.RNCalendarEvents;

export default {
  async checkPermissions(limited = false) {
    return RNCalendarEvents.checkPermissions(limited);
  },

  async requestPermissions(limited = false) {
    return RNCalendarEvents.requestPermissions(limited);
  },

  async fetchAllEvents(startDate, endDate, calendars = []) {
    return RNCalendarEvents.fetchAllEvents(startDate, endDate, calendars);
  },

  async findCalendars() {
    return RNCalendarEvents.findCalendars();
  },

  async saveCalendar(options = {}) {
    return RNCalendarEvents.saveCalendar({
      ...options,
      color: options.color ? processColor(options.color) : undefined,
    });
  },

  async removeCalendar(id) {
    return RNCalendarEvents.removeCalendar(id);
  },

  async findEventById(id) {
    return RNCalendarEvents.findEventById(id);
  },

  async saveEvent(title, details, options = { sync: false }) {
    return RNCalendarEvents.saveEvent(title, details, options);
  },

  async removeEvent(
    id,
    options = Platform.OS === "ios" ? { futureEvents: false } : { sync: false }
  ) {
    return RNCalendarEvents.removeEvent(id, options);
  },

  async removeFutureEvents(id, options = { futureEvents: true }) {
    if (Platform.OS !== "ios") return;
    return RNCalendarEvents.removeEvent(id, options);
  },

  async uriForCalendar() {
    if (Platform.OS !== "android") return;
    return RNCalendarEvents.uriForCalendar();
  },

  async openEventInCalendar(eventID) {
    if (Platform.OS !== "android") return;
    RNCalendarEvents.openEventInCalendar(eventID);
  },
};
