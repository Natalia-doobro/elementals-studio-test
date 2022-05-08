import { Server } from "miragejs";
import database from './DB'
// import db from './db.json';

new Server({
  routes() {
    this.namespace = "api";
    this.get("/users/", () => {
      return database();
    });
  }
});



export async function userSearch() {
  return fetch("/api/users/").then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  });
}