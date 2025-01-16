"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRequest = void 0;
exports.toUserResponse = toUserResponse;
exports.registerRequest = {
    username: "test",
    password: "test",
    name: "test",
};
function toUserResponse(user) {
    return {
        name: user.name,
        username: user.username,
    };
}
