/*
window.addEventListener("load", () => {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Post = function Post(title, link, author, img) {
    _classCallCheck(this, Post);

    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  };

  var app = new Vue({
    el: '#app',
    data: {
      search: '',
      postList: [new Post('Vue.js', 'https://vuejs.org/', 'Chris', 'https://vuejs.org//images/logo.png'),
        new Post('React.js', 'https://facebook.github.io/react/', 'Tim', 'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'),
        new Post('Angular.js', 'https://angularjs.org/', 'Sam', 'https://angularjs.org/img/ng-logo.png'),
        new Post('Ember.js', 'http://emberjs.com/', 'Rachel', 'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'),
        new Post('Meteor.js', 'https://www.meteor.com/', 'Chris', 'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'),
        new Post('Aurelia', 'http://aurelia.io/', 'Tim', 'https://cdn.auth0.com/blog/aurelia-logo.png'),
        new Post('Node.js', 'https://nodejs.org/en/', 'A. A. Ron', 'https://code-maven.com/img/node.png'),
        new Post('Pusher', 'https://pusher.com/', 'Alex', 'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'),
        new Post('Feathers.js', 'http://feathersjs.com/', 'Chuck', 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'),
        new Post ('Node.js', 'https://nodejs.org/en/', 'Harry', 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png')
      ]
    },
    computed: {
      filteredList: function filteredList() {
        var _this = this;

        return this.postList.filter(function (post) {
          return post.title.toLowerCase().includes(_this.search.toLowerCase());
        });
      }
    }
  });

});

*/