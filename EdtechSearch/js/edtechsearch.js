new Vue({
    el: "#item-container",
    data: function () {
        return {
            search: "",
            tools: [{
                    name: "Autodraw",
                    purpose: "AI powered drawing tool",
                    keywords: "draw, illustrate, shapes",
                    website: "https://autodraw.com"
                },
                {
                    name: "Edpuzzle",
                    purpose: "",
                    keywords: "video, question, quiz, assessment",
                    website: "https://edpuzzle.com"
                },
                {
                    name: "Flipgrid",
                    purpose: "",
                    keywords: "discussion, share, video ",
                    website: "https://flipgrid.com"
                },
                {
                    name: "Formative",
                    purpose: "",
                    keywords: "assessment, formative, quiz",
                    website: "https://goformative.com"
                },
                {
                    name: "Glogster",
                    purpose: "",
                    keywords: "interactive, multimedia, poster ",
                    website: "https://edu.glogster.com"
                },
                {
                    name: "Insertlearning",
                    purpose: "",
                    keywords: "content, interactive, web",
                    website: "https://insertlearning.com"
                },
                {
                    name: "Kahoot",
                    purpose: "",
                    keywords: "compete, game, multiple choice, question ",
                    website: "https://kahoot.com"
                },
                {
                    name: "Nearpod",
                    purpose: "",
                    keywords: "interactive, lesson, monitor, multimedia",
                    website: "https://nearpod.com"
                },
                {
                    name: "Padlet",
                    purpose: "",
                    keywords: "board, collaborate, multimedia",
                    website: "https://padlet.com"
                },
                {
                    name: "Plickers",
                    purpose: "",
                    keywords: "feedback, formative, question",
                    website: "https://plickers.com"
                },
                {
                    name: "Quizalize",
                    purpose: "",
                    keywords: "collaborate, question, quiz, team",
                    website: "https://quizalize.com"
                },
                {
                    name: "Quizlet",
                    purpose: "Vocabulary Flashcards",
                    keywords: "compete, flashcards, game, vocabulary",
                    website: "https://quizlet.com"
                },
                {
                    name: "Socrative",
                    purpose: "In-Class Testing",
                    keywords: "assessment, exit ticket, question, quiz",
                    website: "https://socrative.com"
                },
                {
                    name: "Sway",
                    purpose: "",
                    keywords: "content, documentation, presentation, visual",
                    website: "https://sway.office.com"
                },
                {
                    name: "TED-Ed",
                    purpose: "",
                    keywords: "create, lesson, multimedia, TED",
                    website: "https://ed.ted.com"
                },
                {
                    name: "Wakelet",
                    purpose: "",
                    keywords: "collect, content, share, story",
                    website: "https://wakelet.com"
                },
                {
                    name: "",
                    purpose: "",
                    keywords: "",
                    website: ""
                },
                {
                    name: "",
                    purpose: "",
                    keywords: "",
                    website: ""
                },
                {
                    name: "",
                    purpose: "",
                    keywords: "",
                    website: ""
                },

            ],
        };
    },
    computed: {
        filteredTools: function () {
            var self = this;
            return this.tools.filter(function (tool) {
                return tool.keywords.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
            });
            //return this.customers;
        }
    }
});


//focus for the searchbar as soon as the page loads since the autofocus does not work
$(document).ready(function() {
    $( ".focus" ).focus();
  });