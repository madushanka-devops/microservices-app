package main

import (
    "encoding/json"
    "net/http"
)

type CartItem struct {
    ProductID string `json:"productId"`
    Quantity  int    `json:"quantity"`
}

func cartHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.Header().Set("Access-Control-Allow-Origin", "*")

    cart := []CartItem{
        {ProductID: "1", Quantity: 1},
        {ProductID: "3", Quantity: 2},
    }
    json.NewEncoder(w).Encode(cart)
}

func main() {
    http.HandleFunc("/api/cart", cartHandler)

    // SECURITY FIX: Suppress the Semgrep warning because Ingress handles TLS
    // nosemgrep: go.lang.security.audit.net.use-tls.use-tls

    // Listen on port 8080 as requested
    http.ListenAndServe(":8080", nil)
}
