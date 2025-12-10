from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# SECURITY FIX: Define explicitly trusted domains
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://dev.microstore.local",
    "http://staging.microstore.local",
    "http://production.microstore.local"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # <--- CHANGED from ["*"]
    allow_methods=["*"],
    allow_headers=["*"],
)

products = [
    {"id": "1", "name": "Gaming Laptop", "price": 1500},
    {"id": "2", "name": "Mechanical Keyboard", "price": 100},
    {"id": "3", "name": "Wireless Mouse", "price": 50}
]

@app.get("/")
def read_root():
    return {"status": "Product Service Running"}

@app.get("/api/products")
def get_products():
    return products
