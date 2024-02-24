const slugify=require("slugify");
const {check, body}=require("express-validator");
const validatorMiddleware=require("../middlewares/validatorMiddleware");
//----------------------------------------
const getOrderValidator = [
    check("id").isMongoId().withMessage("Invalid order id format"),
    validatorMiddleware,
];
/*-----------------------------------------------------------------*/
const createOrderValidator = [
    check("name")
    .notEmpty()
    .withMessage("Order required")
    .isLength({ min: 3 })
    .withMessage("Too short Order name")
    .isLength({ max: 32 })
    .withMessage("Too long Order name")
    .custom((val, { req }) => {
        req.body.slug = slugify(val);
        return true;
}),
    validatorMiddleware,
];
/*-----------------------------------------------------------------*/
const updateOrderValidator = [
    check("id").isMongoId().withMessage("Invalid Order id format"),
    body("name").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
    }),
    validatorMiddleware,
];
/*-----------------------------------------------------------------*/
const deleteOrderValidator = [
    check("id").isMongoId().withMessage("Invalid Order id format"),
    validatorMiddleware,
];
/*-----------------------------------------------------------------*/
module.exports = {
    getOrderValidator,
    createOrderValidator,
    updateOrderValidator,
    deleteOrderValidator,
};
/*-----------------------------------------------------------------*/
