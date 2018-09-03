# Reproduction of Deactivate issue

Kind of hard to write a falling test for this as it revolves around the way in which the container is destroyed.

## Expected behavior

I would expect the `deactivate` hook to be called on all routes after completing a test, regardless of where an error has been handled. 

## Actual behavior

After a test has completed with an error, the `deactivate` hook is called on all routes above where the error state was handled.


To see issue:

Deactivate not called if error handled above route:

* Checkout `master` branch
* Go to `/tests`
* Open console
* Observe only an error in console, as error was handled above `first-route`

Deactivate called if error handled below route:

* Checkout `with-error` branch
* Go to `/tests`
* Open console
* Observe 'first-route deactivate called' logged in console, as error was handled in child route of `first-route`