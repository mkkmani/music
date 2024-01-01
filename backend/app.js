const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const express = require("express");
const path = require("path");

const app = express();

const dbPath = path.join(__dirname, "musicDatabase.db");

let db = null;

const initDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    const videosTableQuery =
      "create table if not exists videos(id integer primary key,title,video_link)";
    await db.run(videosTableQuery);

    const adminsTableQuery =
      "create table if not exists admin (id integer primary key,admin_name,admin_password,admin_mail,admin_mobile)";
    await db.run(adminsTableQuery);

    const usersTableQuery =
      "create table if not exists users (id integer primary key,user_name,user_password,user_mail,user_mobile)";
    await db.run(usersTableQuery);

    app.listen(3000, () => {
      console.log("server is up and running at localhost 3000");
    });
  } catch (e) {
    console.log(`DB error: ${e.message}`);
    process.exit(1);
  }
};

initDbAndServer();
