export const CONTACTS = [
  { id: 1, name: "Oliver Smith", imageUrl: "https://i.pravatar.cc/300/1" },
  { id: 2, name: "John Eve", imageUrl: "https://i.pravatar.cc/300/2" },
  { id: 3, name: "Eve smith", imageUrl: "https://i.pravatar.cc/300/3" },
];

export const TAGS = [
  { id: 1, label: "Shopping Cart" },
  { id: 2, label: "Product Management" },
  { id: 3, label: "User Guide" },
];

export const STATUS = {
  CREATED: "Created",
  DRAFTED: "Drafted",
};

export const INITIAL_NOTE_LIST = [
  {
    id: 1,
    title: "How to Add Items to Your Shopping Cart",
    description: `Adding items to your shopping cart is a fundamental step towards a seamless shopping experience.
      To add an item, navigate through our extensive collection and locate the product you desire. Once you've found
      the perfect item, simply click on the "Add to Cart" button prominently displayed alongside the product.
      Our intuitive interface ensures a hassle-free process. Upon clicking the button, you'll notice a visual
      confirmation, often a change in the button's appearance, indicating the successful addition of the item to
      your cart. You can continue browsing for more items or proceed to checkout at your convenience. The shopping
      cart conveniently stores all selected items until you're ready to finalize your purchase. Remember, the
      shopping cart allows you to review your selections, modify quantities, or remove items before completing
      your order. Enjoy the convenience of managing your shopping cart effortlessly and securely, making your
      online shopping experience a breeze.`,
    updatedAt: "2023-11-25T08:00:00Z",
    tags: [TAGS[0]],
    assignedContact: CONTACTS[0],
    status: STATUS.CREATED,
  },
  {
    id: 2,
    title: "Managing Your Shopping Cart Items",
    description:
      "Discover how to view, edit, or remove items from your shopping cart to streamline your shopping experience. ",
    updatedAt: "2023-11-24T10:30:00Z",
    tags: [TAGS[1]],
    assignedContact: CONTACTS[1],
    status: STATUS.DRAFTED,
  },
  {
    id: 3,
    title: "Navigating Through Checkout Process",
    description:
      "Learn about the steps involved in the checkout process and how to complete your purchase securely.",
    updatedAt: "2023-11-23T15:45:00Z",
    tags: [TAGS[0], TAGS[2]],
    assignedContact: CONTACTS[2],
    status: STATUS.CREATED,
  },
  {
    id: 4,
    title: "Applying Discount Codes",
    description:
      "Find out how to apply discount codes or coupons to your shopping cart to avail exciting offers and discounts.",
    updatedAt: "2023-11-22T09:20:00Z",
    tags: [TAGS[0], TAGS[1]],
    assignedContact: CONTACTS[2],
    status: STATUS.DRAFTED,
  },
  {
    id: 5,
    title: "Understanding Product Categories",
    description:
      "Explore different product tags available on our platform to easily find the items you need.",
    updatedAt: "2023-11-21T14:00:00Z",
    tags: [TAGS[0]],
    assignedContact: CONTACTS[0],
    status: STATUS.CREATED,
  },
];
