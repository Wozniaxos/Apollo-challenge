# Apollo-challenge

1. Setup Apollo client with "ETMDB" API from that list -> https://github.com/APIs-guru/graphql-apis
2. Create route cinema details where you will fetch allCinemaDetails (first 5 only) and display it on the list with some basic info - let's say: `name`, `hallName` and `technology`
3. After clicking on particular cinema there should be redirect to particular cinema view where only one particular cinemaDetail is fetched and more info of that cinema: `name`, `hallName`, `numberOfSeats`, `cinemaScheduleSet` this will be list of items with `showStartDate`, `showEndDate`, and some movie info like `movieTitle`, `releaseDate`, `durationMinutes`, `budget`. There is no restriction about first param of scheduleSet so you can fetch them as many you want and display all on the list. You should be able to do page refresh on that view and it shouldn't break application.
4. Implement 2 buttons "next" and "previous" as paging for the main allCinemaDetails route - this is why we asked to fetch only first 5 records. Previous "button" should be disabled on first page and "next" button should be disabled on last page. These are coursor paginated items.
5. Write 2 simple test (1 per view) using Mocking capabilities of apollo that test just displaying list of details properly and displayig particular detail properly

### Bonus
Current pagination implementation will trigger new query on every page change since records are encapsulated in node object and apollo cache doesn't know how to handle caching of that scenario. More info about this you will find at: https://www.apollographql.com/docs/react/pagination/cursor-based/ in this particular case you can go with just ready relay pagination. The result should be that you on page change you get proper records without seeing any of new requests in the console.

### Notes
1. Try to use conventional commits https://www.conventionalcommits.org/en/v1.0.0/
2. Try to focus mainly on logic, i would say that visual part is the last part that you should take care of in that scenario

### Helpful resources
1. Apollo client docs -> https://www.apollographql.com/docs/react/
2. GraphQL -> https://graphql.org/
