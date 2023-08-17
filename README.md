8/9

id is set to the table's title, so it can be accessed by URI.
(need to catch errors for duplicate table names)

table data is an object of header keys with array values.


8/17
This app is now going to allow users to create templates and add/edit server data.
Such as personnel contact cards, etc. (instead of creating tables)

Data format:
{ custom: [
    {
        id: {title},
        card: {
            data1: [value],
            data2: [value]
        }
    }
]}


-------------------
how-to use:
start the server:
    run >> json-server --watch db.json
    >> npm start
