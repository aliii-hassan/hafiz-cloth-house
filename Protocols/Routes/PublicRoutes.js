const express = require("express");
const router = express.Router();

const HomePageController = require("../../Controllers/HomePageController");
const ProductsController = require("../../Controllers/ProductsController");
const ProductViewController = require("../../Controllers/ProductViewController");
const AboutUsController = require("../../Controllers/AboutUsController");
const ViewCartController = require("../../Controllers/ViewCartController");
const BillingInfoController = require("../../Controllers/BillingInfoController");
const ContactUsController = require("../../Controllers/ContactUsController");

const { HomePage } = HomePageController;
const { ProductsPage } = ProductsController;
const { ProductViewPage } = ProductViewController;
const { AboutUsPage } = AboutUsController;
const { ViewCartPage } = ViewCartController;
const { BillingInfoPage } = BillingInfoController;
const { ContactUsPage } = ContactUsController;

router.get("/", HomePage);
router.get("/products", ProductsPage);
router.post("/products", ProductsPage);
router.get("/productview", ProductViewPage);
router.get("/aboutus", AboutUsPage);
router.get("/viewcart", ViewCartPage);
router.get("/billinginfo", BillingInfoPage);
router.get("/contactus", ContactUsPage);

module.exports = router;