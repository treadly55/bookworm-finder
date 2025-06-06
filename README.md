# The Bookworm's Companion 📚

A prototype Progressive Web App (PWA) that provides intelligent book recommendations using the OpenAI Assistants API and semantic search on a custom knowledge base. 

**[➡️ View the Live Demo](https://amazing-croissant-511391.netlify.app/)**

---

![Product screenshot](https://i.ibb.co/VWg46zHb/Frame-8.png)


## About The Project

This project was built to explore the practical application of ingesting custom content into the OpenAI ecosystem using the Assistants feature. 

The goal was to create a recommendation engine for readers that uses the latest month's best seller list. THe best seller list is information that won't already be present in the ChatGPT database.

There are functions present in the code base that allow a developer to create and upload their own content and run queries against the provided content.

## How It Works: The Technical Details

The core of this application is the interaction with a pre-configured OpenAI Assistant. The workflow is as follows:

1.  **Vector Store Creation:** A text file (`books.txt`) containing book information is uploaded to an OpenAI Vector Store. OpenAI processes this file, creating vector embeddings that capture the semantic meaning of the content.
2.  **Assistant Configuration:** An OpenAI Assistant is created and equipped with the `file_search` tool, which is pointed at the Vector Store.
3.  **User Interaction:** A user submits a natural language query.
4.  **API Call:** The frontend calls the OpenAI Assistant, creating a new "Thread" and adding the user's query as a "Message."
5.  **Intelligent Search:** The Assistant runs, using its `file_search` tool to perform a semantic search on the vector embeddings. It finds the most relevant chunks of text from the original `books.txt` file based on the query's intent.
6.  **Synthesized Response:** The Assistant synthesizes the search results into a friendly, conversational recommendation and returns it to the user.

## Tech Stack

* **Frontend:** Vite, Vanilla JavaScript, HTML5, CSS3
* **AI & API:** OpenAI Assistants API (specifically the `file_search` tool on a Vector Store)
* **Deployment:** Netlify
* **Version Control:** Git & GitHub

