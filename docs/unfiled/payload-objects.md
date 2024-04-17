Payload Objects

The folder src/server/policeDataManager/payloadObjects was created to
hold classes that wrap complex database models so that those models can
be simplified for transmission and made more user-friendly to consumers
of the service. At this writing (11/16/22) the only existing payload
object is Case, which wraps the deeply complex cases model, which
allowed us to make some changes under the hood to the model without
changing the payload we return to the consumer.

Process for Creating a Payload Object

-   Create a class that takes the model as an argument to the
    constructor

-   Create getter methods for getting properties that will be needed on
    the server side when interacting with the payload object

-   Create a to JSON function (can be async, but if it is, you have to
    call it explicitly when returning the object from the service) that
    will map the model data into the format you want to transmit to the
    consumer
