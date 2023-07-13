import React from 'react'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Welcome, this is my personal web application built with React, using stateless
        functional components and tailored to run in all browser sizes for maximum responsiveness.
      </p>
      <p>
        Within this application I have included some technical demonstrations of the various features of
        React, incorporating React Hooks, working with data and UX principles.
      </p>
      <div className="card mb-card mb-3">
        <div className="card-body">
          <h5 className="card-title">A little about me</h5>
          <p className="card-text">
            I have been working in the Financial Technology sector for over ten years, primarily as a
            Front End developer. From 2012-2020 I was employed with CME - Chicago Mercantile Exchange,
            working on various applications starting with the company website, and eventually moving into using
            React to create responsive trading applications.
          </p>
          <p>
            I started out with Data Intellect (formely AquaQ Analytics) in 2020, as a Senior Front End Developer
            assigned to work on client with a major international investment bank. I took on some new roles and
            responsibilities. These included transitioning to a full stack developer, working with Java and SQL,
            and some additional Dev Ops work using gitlab. I have been release co-ordinator for
            many production releases, and applied myself to some work on the pipelines and build processes too.
          </p>
          <p>
            Additionally, I have taken on some new challenges at Data Intellect, such as becoming a line manager,
            where I am responsive for serveral linees, coaching and mentoring them to help them achieve success too.
            This has been a real new field for me to explore and it is something I really enjoy. An extension of this
            is that I took on the role of client oversight, reaching out to other employees across various clients and
            putting together a strategy for helping them overcome any challenges they face.
          </p>
        </div>
      </div>
      <h1>This application</h1>
      <p>
        I have built this web application as a showcase of some of my React experience, and I follow a similar
        approach to development professionally.  It uses modern stateless functional React components, rather
        than the old style class based components. I&#39;m using Bootstrap for it&#39;s many benefits such as
        helper classes for margins/padding to reduce the need for css. It also had a nice responsive navigation
        bar which will adjust to a hamburger menu on smaller screen sizes.
      </p>
      <p>
        I use scss for it&#39;s ability to have nested css rules and variables, so that, for example a colours.scss file
        can be used as a single source for the whole app, rather than specifying colours within the scss for each component.
      </p>
      <p>
        I have an example of a table, using the AGGrid js library which I have found to be very useful for tabling
        given that it has sorting, column rearranging, filtering and pagination built in, as well as many other
        features and customisations. In the past I have written a table with these features from scratch, and
        in fact when training others in React basics I will do this to give a firm grasp of the fundamentals,
        before transitioning into using AGGrid.
      </p>
      <p>
        I of course use VS Code for my IDE, with airbnb rules with eslint. I find the linting rules help enforce
        standards and good practice when working on a large codebase with others.
      </p>
    </div>
  )
}

export default Home
