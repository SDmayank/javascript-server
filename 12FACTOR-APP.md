# The Twelve-Factor App
## Introduction
In the modern era, software is commonly delivered as a service: called web apps, or software as a service. By the use of twelve factor app methodlogy we can build the software as a service apps that:
1.If we want to do minimize the cost and time for new developers then we can use declatative formats for setup automation.
2.Clean contract with the underlying operating system offering maximum portability between execution enviroments
3.Are suitable for deployment on modrn cloud platforms, obviating the need for servers and systems administration.

## The Twelve Factors are:
**1.Codebase**
**2.Dependencies**
**3.Config**
**4.Backing services**
**5.Build, release, run**
**6.Process**
**7.Port Binding**
**8.Concurrency**
**9.Disposability**
**10.Dev/prod Parity**
**11. Logs**
**12.Admin Process**
### Codebase
![](https://12factor.net/images/codebase-deploys.png)
A codebase is any single repo (in a centralized revision control system like Subversion), or any set of repos who share a root commit (in a decentralized revision control system like Git).
1.If there are multiple codebases, it’s not an app ,it’s a distributed system. Each component in a distributed system is an app, and each can individually comply with twelve-factor.
2.Multiple apps sharing the same code is a violation of twelve-factor. The solution here is to factor shared code into libraries which can be included through the dependency manager.
There is only one codebase per app, but there will be many deploys of the app. A deploy is a running instance of the app. This is typically a production site, and one or more staging sites. Additionally, every developer has a copy of the app running in their local development environment, each of which also qualifies as a deploy.
### Dependencies
Most programming languages offer a packaging system for distributing support libraries, such as CPAN for Perl or Rubygems for Ruby. Libraries installed through a packaging system can be installed system-wide or scoped into the directory containing the app.
A twelve-factor app never relies on implicit existence of system-wide packages. It declares all dependencies, completely and exactly, via a dependency declaration manifest. Furthermore, it uses a dependency isolation tool during execution to ensure that no implicit dependencies “leak in” from the surrounding system. The full and explicit dependency specification is applied uniformly to both production and development.
### Config
An app’s config is everything that is likely to vary between deploys (staging, production, developer environments, etc). This includes:
1.Resource handles to the database, Memcached, and other backing services
2.Credentials to external services such as Amazon S3 or Twitter
3.Per-deploy values such as the canonical hostname for the deploy
### Backing services
A backing service is any service the app consumes over the network as part of its normal operation. Examples include datastores (such as MySQL or CouchDB), messaging/queueing systems (such as RabbitMQ or Beanstalkd), SMTP services for outbound email (such as Postfix), and caching systems (such as Memcached).
###  Build, release, run
1.The build stage is a transform which converts a code repo into an executable bundle known as a build. Using a version of the code at a commit specified by the deployment process, the build stage fetches vendors dependencies and compiles binaries and assets.
2.The release stage takes the build produced by the build stage and combines it with the deploy’s current config. The resulting release contains both the build and the config and is ready for immediate execution in the execution environment.
3.The run stage (also known as “runtime”) runs the app in the execution environment, by launching some set of the app’s processes against a selected release.
### Processes
In the simplest case, the code is a stand-alone script, the execution environment is a developer’s local laptop with an installed language runtime, and the process is launched via the command line (for example, python my_script.py). On the other end of the spectrum, a production deploy of a sophisticated app may use many process types, instantiated into zero or more running processes.
### Port binding
Web apps are sometimes executed inside a webserver container. For example, PHP apps might run as a module inside Apache HTTPD, or Java apps might run inside Tomcat.
The twelve-factor app is completely self-contained and does not rely on runtime injection of a webserver into the execution environment to create a web-facing service. The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port
### Concurrency
In the twelve-factor app, processes are a first class citizen. Processes in the twelve-factor app take strong cues from the unix process model for running service daemons. Using this model, the developer can architect their app to handle diverse workloads by assigning each type of work to a process type. For example, HTTP requests may be handled by a web process, and long-running background tasks handled by a worker process.
### Disposability
Processes should strive to minimize startup time. Ideally, a process takes a few seconds from the time the launch command is executed until the process is up and ready to receive requests or jobs. Short startup time provides more agility for the release process and scaling up; and it aids robustness, because the process manager can more easily move processes to new physical machines when warranted.
Processes shut down gracefully when they receive a SIGTERM signal from the process manager
### Dev/prod parity
Historically, there have been substantial gaps between development (a developer making live edits to a local deploy of the app) and production (a running deploy of the app accessed by end users). These gaps manifest in three areas:
1.The time gap: A developer may work on code that takes days, weeks, or even months to go into production.
2.The personnel gap: Developers write code, ops engineers deploy it.
3.The tools gap: Developers may be using a stack like Nginx, SQLite, and OS X, while the production deploy uses Apache, MySQL, and Linux.
### logs
Logs are the stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services. Logs in their raw form are typically a text format with one event per line (though backtraces from exceptions may span multiple lines). Logs have no fixed beginning or end, but flow continuously as long as the app is operating.
### Admin processes
The process formation is the array of processes that are used to do the app’s regular business (such as handling web requests) as it runs. Separately, developers will often wish to do one-off administrative or maintenance tasks for the app, such as:
1.Running database migrations (e.g. manage.py migrate in Django, rake db:migrate in Rails).
2.Running a console (also known as a REPL shell) to run arbitrary code or inspect the app’s models against the live database. Most languages provide a REPL by running the interpreter without any arguments (e.g. python or perl) or in some cases have a separate command (e.g. irb for Ruby, rails console for Rails).
3.Running one-time scripts committed into the app’s repo (e.g. php scripts/fix_bad_records.php).

