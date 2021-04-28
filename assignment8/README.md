# Assignment 8
- Implement a viewer for the [Giphy API](https://developers.giphy.com/docs/api/#quick-start-guide) with the following menu items
  - Search field allows to search gifs
    - Include a pagination
        - Previous and Next link
        - Editable text field holding the current value
        - Avoid passing non-existing pages
        - Show number of pages
          - Giphy API has an error loading with high offset
  - Show trending gifs
      - Include a pagination
  - Make sure that the right amount of requests is sent
  - Show a loader text while the request is being sent
  - Use ```autorun``` and ```useLocalObservable``` for creating a MobX store automatically requesting required data



