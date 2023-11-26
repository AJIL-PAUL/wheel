export const ROLES = [
  { id: 1, name: "Owner" },
  { id: 2, name: "Standard" },
];

export const INITIAL_CONTACT_LIST = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    role: ROLES[1],
    createdAt: "2021-07-20T05:30:00.000Z",
  },
  {
    id: 2,
    firstName: "Oliver",
    lastName: "Smith",
    email: "oliver@example.com",
    role: ROLES[0],
    createdAt: "2021-08-20T07:45:00.000Z",
  },
  {
    id: 3,
    firstName: "George",
    lastName: "Williams",
    email: "george@example.com",
    role: ROLES[1],
    createdAt: "2021-07-22T06:00:00.000Z",
  },
];
