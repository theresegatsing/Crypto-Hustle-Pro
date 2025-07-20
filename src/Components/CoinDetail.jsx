import { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const { symbol} = useParams()
const [fullDetails, setFullDetails] = useState(null)
