import Vue from "vue";
import { authHeader } from './auth_header';
import axios from "axios";

export const groupService = {
    getgroups,
    creategroup,
    updategroup,
    deletegroup
};


function getgroups() {
    Vue.$log.debug("Enter");

    const config = {
        headers: authHeader()
    }
    
    Vue.$log.debug("Header: " + JSON.stringify(config));

    return axios.get(process.env.VUE_APP_API_URL + '/groups', config)
        .then(response => {
            const groups = response.data;
            return groups;
        })
        .catch(err => {
            Vue.$log.error("getgroups Failure: ");

            var error = '';

            if (err.response) {
                Vue.$log.error("err.response: " + JSON.stringify(err.response));
                error = err.response.data.msg;
            }
            else if (err.request) {
                Vue.$log.error("err.request: " + err.request);
                error = err.request
            }
            else {
                Vue.$log.error("err.message: " + err.message);
                error = err.message;
            }
            Vue.$log.debug("error: " + error);
            return Promise.reject(error);
        });
}

function updategroup(group) {
    Vue.$log.debug("Enter")
    Vue.$log.debug("group changes" + JSON.stringify(group));

    const config = {
        headers: authHeader()
    }

    return axios.put(process.env.VUE_APP_API_URL + '/groups/' + group.id, group.changes, config)
        .then(response => {
            Vue.$log.debug(response);
            const group = response.data;
            return group;
        })
        .catch(err => {
            Vue.$log.error("updategroup Failure: ");

            var error = '';

            if (err.response) {
                Vue.$log.error("err.response: " + JSON.stringify(err.response));
                error = err.response.data.msg;
            }
            else if (err.request) {
                Vue.$log.error("err.request: " + err.request);
                error = err.request
            }
            else {
                Vue.$log.error("err.message: " + err.message);
                error = err.message;
            }
            Vue.$log.debug("error: " + error);
            return Promise.reject(error);
        });
}

function deletegroup(group) {
    Vue.$log.debug("Enter")
    Vue.$log.debug("group changes" + group);

    const config = {
        headers: authHeader()
    }

    return axios.delete(process.env.VUE_APP_API_URL + '/groups/' + group, config)
        .then(response => {
            Vue.$log.debug(response);
            const group = response.data;
            return group;
        })
        .catch(err => {
            Vue.$log.error("deletegroup Failure: ");

            var error = '';

            if (err.response) {
                Vue.$log.error("err.response: " + JSON.stringify(err.response));
                error = err.response.data.msg;
            }
            else if (err.request) {
                Vue.$log.error("err.request: " + err.request);
                error = err.request
            }
            else {
                Vue.$log.error("err.message: " + err.message);
                error = err.message;
            }
            Vue.$log.debug("error: " + error);
            return Promise.reject(error);
        });
}

function creategroup(group) {
    Vue.$log.debug("Enter")
    Vue.$log.debug("group: " + JSON.stringify(user));

    const config = {
        headers: authHeader()
    }

    return axios.post(process.env.VUE_APP_API_URL + '/groups', group, config)
        .then(response => {
            Vue.$log.debug(response);
            const group = response.data;
            return group;
        })
        .catch(err => {
            Vue.$log.error("creategroup Failure: ");

            var error = '';

            if (err.response) {
                Vue.$log.error("err.response: " + JSON.stringify(err.response));
                error = err.response.data.msg;
            }
            else if (err.request) {
                Vue.$log.error("err.request: " + err.request);
                error = err.request
            }
            else {
                Vue.$log.error("err.message: " + err.message);
                error = err.message;
            }
            Vue.$log.debug("error: " + error);
            return Promise.reject(error);
        });
}
