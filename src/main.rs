use rocket::fs::FileServer;

#[macro_use] extern crate rocket;


#[launch]
fn rocket() -> _ {
    rocket::build()
    .mount("/", FileServer::from("/home/lvcky/projects/map/src/frontend/dist/frontend/browser"))
}