import React from 'react'

function Home() {
  return (
    <div className="w-75">
      <h1>Home</h1>
      <p>
        Welcome, this is my personal web application built with React, using stateless
        functional components and tailored to run in all browser sizes for maximum
        <strong> responsiveness</strong>
        . Note that this application is currently undergoing a revamp! Some of the other sections
        may be of more use to a UI developer as they involve tracking values in the chrome devtools console.
      </p>
      <p>
        Within this application I have included some technical demonstrations of the various features of
        React, incorporating
        <strong> React Hooks</strong>
        , working with data and UX principles.
      </p>
      <div className="card mb-card mb-3">
        <div className="card-body">
          <h5 className="card-title">A little about me</h5>
          <p className="card-text">
            I have been working in the Financial Technology sector for
            <strong> over ten years</strong>
            , primarily as a
            Front End developer. From 2012-2020 I was employed with
            <strong> CME - Chicago Mercantile Exchange</strong>
            ,
            working on various applications starting with the company website, and eventually moving into using
            React to create responsive trading applications.
          </p>
          <p>
            I started out with
            <strong> Data Intellect (formely AquaQ Analytics) </strong>
            in 2020, as a Senior Front End Developer
            assigned to work on client with a major international investment bank. I took on some new roles and
            responsibilities. These included transitioning to a
            <strong> full stack developer</strong>
            , working with
            <strong> Java and SQL</strong>
            , and some additional Dev Ops work using gitlab. I have been
            <strong> release co-ordinator </strong>
            for many production releases, and applied myself to some work on the pipelines and build processes too.
          </p>
          <p>
            Additionally, I have taken on some new challenges at Data Intellect, such as becoming a
            <strong> line manager</strong>
            , where I am responsive for serveral linees, coaching and mentoring them to help them achieve success too.
            This has been an exciting new field for me to explore and it is something I really enjoy. An extension of this
            is that I took on the role of
            <strong> client oversight</strong>
            , reaching out to other employees across various clients and
            putting together a strategy for helping them overcome any challenges they face. I&#39;ve also conducted
            many
            <strong> interviews </strong>
            for front end positions here at Data Intellect, and have personally put together a solid
            set of questions and code tests for applicants which has really helped the business land on a choice of
            candidates after interview. I have also put together and hosted a React training course over 3 days,
            which went well and I hope to do again with a new set of graduates.
          </p>
        </div>
      </div>
      <h1>This application</h1>
      <p>
        I have built this web application as a showcase of some of my React experience, and I follow a similar
        approach to development professionally.  It uses modern stateless functional React components, rather
        than the old style class based components, so that I can make use of the modern
        <strong> ES6 functions</strong>
        , hooks like useEffect and useState instead of the old lifecycle methods like componentDidMount, etc.
        Some of the ES6 feature have really helped speed up development in the last few years, such as
        using let and const, arrow functions with shorter syntax, mapping arrays, ternary operators and spreads.
      </p>
      <p>
        I&#39;m using
        <strong> Bootstrap </strong>
        for it&#39;s many benefits such as
        helper classes for margins/padding to reduce the need for css. It also had a nice responsive navigation
        bar which will adjust to a hamburger menu on smaller screen sizes.
      </p>
      <p>
        I use
        <strong> scss </strong>
        for it&#39;s ability to have nested css rules and variables, so that, for example a colours.scss file
        can be used as a single source for the whole app, rather than specifying colours within the scss for each component.
      </p>
      <p>
        I have an example of a table, using the
        <strong> AG Grid </strong>
        js library which I have found to be very useful for tabling
        given that it has sorting, column rearranging, filtering and pagination built in, as well as many other
        features and customisations. In the past I have written a table with these features from scratch, and
        in fact
        <strong> when training others </strong>
        in React basics I will do this to give a firm grasp of the fundamentals,
        before transitioning into using AGGrid.
      </p>
      <p>
        I of course use VS Code for my IDE, with airbnb rules with
        <strong> eslint</strong>
        . I find the linting rules help enforce
        standards and good practice when working on a large codebase with others.
      </p>
    </div>
  )
}

export default Home
