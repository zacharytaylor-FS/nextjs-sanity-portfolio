// jest.setup.js
import '@testing-library/jest-dom';
jest.mock("next/navigation", () => require("next-router-mock"));