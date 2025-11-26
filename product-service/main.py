from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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
