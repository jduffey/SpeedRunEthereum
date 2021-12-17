import moment from "moment";

// TODO PR: how do we keep just one instance of this enum? Like a commons library
const EVENT_TYPES = {
  CHALLENGE_SUBMIT: "challenge.submit",
  CHALLENGE_REVIEW: "challenge.review",
  CHALLENGE_CREATE: "challenge.create",
  USER_CREATE: "user.create",
  USER_UPDATE: "user.update",
};

export const eventDisplay = ({ type, timestamp, payload }) => {
  switch (type) {
    case EVENT_TYPES.CHALLENGE_SUBMIT: {
      return `${moment(timestamp).format("YYYY-MM-DD, HH:mm")} - ${payload.userAddress.slice(0, 6)}... submitted a solution for ${payload.challengeId}`;
    }

    case EVENT_TYPES.CHALLENGE_REVIEW: {
      return `${moment(timestamp).format("YYYY-MM-DD, HH:mm")} - A challenge submitted by ${payload.userAddress.slice(
        0,
        6,
      )}... has been ${payload.reviewAction.toLowerCase()}`;
    }

    case EVENT_TYPES.USER_CREATE: {
      return `${moment(timestamp).format("YYYY-MM-DD, HH:mm")} - ${payload.userAddress.slice(0, 6)}... just created a builder account. Welcome!`;
    }

    // ToDo. Build events. Wait until we tackled issue #134
    // https://github.com/moonshotcollective/scaffold-directory/issues/134

    default:
      // do nothing
      return "";
  }
};
