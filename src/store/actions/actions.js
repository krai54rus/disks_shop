export const FETCH_AUTO_PENDING = 'FETCH_AUTO_PENDING';
export const FETCH_AUTO_SUCCESS = 'FETCH_AUTO_SUCCESS';
export const FETCH_AUTO_ERROR = 'FETCH_AUTO_ERROR';

function fetchAUTOPending() {
    return {
        type: FETCH_AUTO_PENDING
    };
}

function fetchAUTOSuccess(AUTO) {
    return {
        type: FETCH_AUTO_SUCCESS,
        AUTO: AUTO
    };
}

function fetchAUTOError(error) {
    return {
        type: FETCH_AUTO_ERROR,
        error: error
    };
}
