const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "home",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "Desktop",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "My Files",
              isFolder: true,
              items: [
                {
                  id: "5",
                  name: "File.txt",
                  isFolder: false
                },
                {
                  id: "6",
                  name: "File1.txt",
                  isFolder: false
                },
                {
                  id: "7",
                  name: "File2.txt",
                  isFolder: false
                }
              ]
            },
            {
              id: "8",
              name: "My Photos",
              isFolder: true,
              items: [
                {
                  id: "9",
                  name: "Image.jpg",
                  isFolder: false
                },
                {
                  id: "10",
                  name: "Image2.jpg",
                  isFolder: false
                },
                {
                  id: "11",
                  name: "Image3.jpg",
                  isFolder: false
                }
              ]
            }
          ]
        },
        {
          id: "12",
          name: "Downloads",
          isFolder: true,
          items: [
            {
              id: "13",
              name: "Image.jpg",
              isFolder: false
            },
            {
              id: "14",
              name: "Doc.pdf",
              isFolder: false
            },
            {
              id: "15",
              name: "Movie.mkv",
              isFolder: false
            }
          ]
        }
      ]
    }
  ]
};

export default explorer;
