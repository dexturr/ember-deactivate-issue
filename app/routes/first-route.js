import Route from '@ember/routing/route';

export default Route.extend({
    deactivate() {
        console.log('first-route deactivate called'); // eslint-disable-line no-console
    }
});
