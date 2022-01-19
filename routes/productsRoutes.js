import express from "express";
import {
  getProductDetail,
  getProductReview,
  getProductOffers,
  getSearchResult,
} from "../controllers/productsController.js";
const router = express.Router();

router.get("/products/:productId", getProductDetail);
router.get("/products/:productId/reviews", getProductReview);
router.get("/products/:productId/offers", getProductOffers);
router.get("/search/:searchQuery", getSearchResult);

export default router;
