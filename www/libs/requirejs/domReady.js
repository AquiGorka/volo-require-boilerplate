


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>requirejs/domReady · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe3.rs.github.com">
    <meta name="ruby" content="ruby 2.0.0p247-github4 (2013-06-27) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="0r9ennNtcrySMQOhsNF9FhxcHhrdbaUDYpUyzToIkuo=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-e4602892df924f8f230b44ddccd223303a30c009.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-8230ebbc9c20ca36d6a93a15aa009fef0d31b37f.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-f86a2975a82dceee28e5afe598d1ebbfd7109d79.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-3f540da8525ed11e19496375dffc214b5576abbb.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="810830414f452c54022be8542f270cca">

        <meta property="og:title" content="domReady"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/requirejs/domReady"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="domReady - An AMD loader plugin for detecting DOM ready"/>

  <meta name="description" content="domReady - An AMD loader plugin for detecting DOM ready" />

  <meta content="1781835" name="octolytics-dimension-user_id" /><meta content="requirejs" name="octolytics-dimension-user_login" /><meta content="4458991" name="octolytics-dimension-repository_id" /><meta content="requirejs/domReady" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4458991" name="octolytics-dimension-repository_network_root_id" /><meta content="requirejs/domReady" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/requirejs/domReady/commits/master.atom" rel="alternate" title="Recent Commits to domReady:master" type="application/atom+xml" />

  </head>


  <body class="logged_out   vis-public env-production ">

    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Frequirejs%2FdomReady">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="requirejs/domReady"
      data-branch="master"
      data-sha="e08428cef84b05ba843389476396e507f477d88f"
  >

    <input type="hidden" name="nwo" value="requirejs/domReady" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Frequirejs%2FdomReady"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/requirejs/domReady/stargazers">
  26
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Frequirejs%2FdomReady"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/requirejs/domReady/network" class="social-count">
        18
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/requirejs" class="url fn" itemprop="url" rel="author"><span itemprop="title">requirejs</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/requirejs/domReady" class="js-current-repository js-repo-home-link">domReady</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container with-full-navigation">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/requirejs/domReady" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /requirejs/domReady">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/requirejs/domReady/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /requirejs/domReady/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/requirejs/domReady/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /requirejs/domReady/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/requirejs/domReady/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /requirejs/domReady/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/requirejs/domReady/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /requirejs/domReady/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/requirejs/domReady/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /requirejs/domReady/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/requirejs/domReady.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/requirejs/domReady.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/requirejs/domReady" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/requirejs/domReady" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>



                <a href="/requirejs/domReady/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          
<div class="js-info-carrier" data-show-full-navigation="yes"></div>

<div class="repository-meta js-details-container ">
    <div class="repository-description js-details-show">
      <p>An AMD loader plugin for detecting DOM ready</p>
    </div>



</div>

<div class="capped-box overall-summary ">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">

    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/requirejs/domReady/commits/master">
          <span class="num">
            <span class="octicon octicon-history"></span>
            11
          </span>
          commits
        </a>
      </li>
      <li>
        <a data-pjax href="/requirejs/domReady/branches">
          <span class="num">
            <span class="octicon octicon-git-branch"></span>
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/requirejs/domReady/releases">
          <span class="num">
            <span class="octicon octicon-tag"></span>
            3
          </span>
          releases
        </a>
      </li>

      <li>
        <a href="/requirejs/domReady/contributors">
          <span class="num">
            <span class="octicon octicon-organization"></span>
            2
          </span>
          contributors
        </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/requirejs/domReady/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f15501;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100%</span>
              </a>
          </li>
        </ol>
      </div>
  </div>

</div>

  <a href="#"
     class="repository-lang-stats-graph js-toggle-lang-stats tooltipped downwards"
     title="Show language statistics"
     style="background-color:#f15501">
  <span class="language-color" style="width:100%; background-color:#f15501;" itemprop="keywords">JavaScript</span>
  </a>




<div class="file-navigation in-mid-page">
    <a href="/requirejs/domReady/compare" class="minibutton compact primary tooltipped downwards" title="Compare &amp; review" data-pjax>
      <span class="octicon octicon-git-compare"></span>
    </a>

  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/requirejs/domReady/tree/master" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/requirejs/domReady/tree/latest" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="latest" data-skip-pjax="true" rel="nofollow" title="latest">latest</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/requirejs/domReady/tree/2.0.1" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.0.1" data-skip-pjax="true" rel="nofollow" title="2.0.1">2.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/requirejs/domReady/tree/2.0.0" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.0.0" data-skip-pjax="true" rel="nofollow" title="2.0.0">2.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->


  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/requirejs/domReady" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">domReady</span></a></span></span><span class="separator"> / </span><form action="/login?return_to=%2Frequirejs%2FdomReady" class="js-new-blob-form tooltipped rightwards new-file-link" method="post" title="Sign in to make or propose changes"><span class="js-new-blob-submit octicon octicon-file-add" data-test-id="create-new-git-file"></span></form></div>
</div>



<a href="/requirejs/domReady/find/master"
  data-hotkey="t" style="display:none" data-pjax>Show File Finder</a>
<div class="bubble files-bubble">
  <table class="files" data-pjax>
    <thead>

        
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/requirejs/domReady/commit/449478e133bd39ac043778fded3d9a8258be50ba" class="message" data-pjax="true" title="clarify contribution model in domReady">clarify contribution model in domReady</a>
        
    </p>
    <div class="commit-meta">
      <span class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="449478e133bd39ac043778fded3d9a8258be50ba" data-copied-hint="copied!" title="Copy SHA"><span class="octicon octicon-clippy"></span></span>
      <a href="/requirejs/domReady/commit/449478e133bd39ac043778fded3d9a8258be50ba" class="sha-block" data-pjax>latest commit <span class="sha">449478e133</span></a>

      <div class="authorship">
        <img class="gravatar" height="20" src="https://secure.gravatar.com/avatar/00ac28bdce61e7db41be57fb3b7f3525?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" />
        <span class="author-name"><a href="/jrburke" data-skip-pjax="true" rel="contributor">jrburke</a></span>
        authored <time class="js-relative-date updated" datetime="2013-04-08T15:48:41-07:00" title="2013-04-08 15:48:41">April 08, 2013</time>

      </div>
    </div>
  </div>

    </thead>

    
<tbody class=""
  data-url="/requirejs/domReady/file-list/master">
    <tr class="alt">
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/requirejs/domReady/blob/master/LICENSE" class="js-directory-link" id="9879d6db96fd29134fc802214163b95a-ffaf31710ebf6798081f387736e36500b5525efd" title="LICENSE">LICENSE</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/requirejs/domReady/commit/8bd096ceabbf062dd1c0d8d6554bb1f6d2c63382" class="message" data-pjax="true" title="Moving domReady to its own repo.">Moving domReady to its own repo.</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" datetime="2012-05-26T18:05:41-07:00" title="2012-05-26 18:05:41">May 26, 2012</time></span></td>
    </tr>
    <tr class="">
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/requirejs/domReady/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-6f4aa49f104b398e0dd2717f33d46c6e48a06afc" title="README.md">README.md</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/requirejs/domReady/commit/449478e133bd39ac043778fded3d9a8258be50ba" class="message" data-pjax="true" title="clarify contribution model in domReady">clarify contribution model in domReady</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" datetime="2013-04-08T15:48:41-07:00" title="2013-04-08 15:48:41">April 08, 2013</time></span></td>
    </tr>
    <tr class="alt">
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/requirejs/domReady/blob/master/domReady.js" class="js-directory-link" id="cb835d3762f4db22a9c4d3fa3dd2cf7d-2b541220981460dc926ec5930850f03f5bfc8fc7" title="domReady.js">domReady.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/requirejs/domReady/commit/892f63a4f19ead0a6d38b3dd75b55928f67a1891" class="message" data-pjax="true" title="Rev to 2.0.1">Rev to 2.0.1</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" datetime="2012-08-09T08:18:53-07:00" title="2012-08-09 08:18:53">August 09, 2012</time></span></td>
    </tr>
    <tr class="">
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/requirejs/domReady/blob/master/package.json" class="js-directory-link" id="b9cfc7f2cdf78a7f4b91a753d10865a2-062a000e56f28f508145a5c214c23aeccd41fb81" title="package.json">package.json</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/requirejs/domReady/commit/f73b33dad2617ca6b0261234b185243a901c075e" class="message" data-pjax="true" title="added more info to package.json">added more info to package.json</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" datetime="2012-08-13T09:37:51-07:00" title="2012-08-13 09:37:51">August 13, 2012</time></span></td>
    </tr>
</tbody>

  </table>
</div>

  <div id="readme" class="clearfix announce instapaper_body md">
    <span class="name"><span class="octicon octicon-book"></span> README.md</span><article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a name="domready" class="anchor" href="#domready"><span class="octicon octicon-link"></span></a>domReady</h1>

<p>An AMD loader plugin for detecting DOM ready.</p>

<p>Known to work in RequireJS, but should work in other
AMD loaders that support the same loader plugin API.</p>

<h2>
<a name="docs" class="anchor" href="#docs"><span class="octicon octicon-link"></span></a>Docs</h2>

<p>See the <a href="http://requirejs.org/docs/api.html#pageload">RequireJS API "Page Load Event Support/DOM Ready" section</a>.</p>

<h2>
<a name="latest-release" class="anchor" href="#latest-release"><span class="octicon octicon-link"></span></a>Latest release</h2>

<p>The latest release will be available from the "latest" tag.</p>

<h2>
<a name="license" class="anchor" href="#license"><span class="octicon octicon-link"></span></a>License</h2>

<p>Dual-licensed -- new BSD or MIT.</p>

<h2>
<a name="where-are-the-tests" class="anchor" href="#where-are-the-tests"><span class="octicon octicon-link"></span></a>Where are the tests?</h2>

<p>They are in the <a href="https://github.com/jrburke/requirejs">requirejs</a> and
<a href="https://github.com/jrburke/r.js">r.js</a> repos.</p>

<h2>
<a name="history" class="anchor" href="#history"><span class="octicon octicon-link"></span></a>History</h2>

<p>This plugin was in the <a href="https://github.com/jrburke/requirejs">requirejs repo</a>
up until the requirejs 2.0 release.</p>

<h2>
<a name="contributing" class="anchor" href="#contributing"><span class="octicon octicon-link"></span></a>Contributing</h2>

<p>domReady follows the <a href="http://requirejs.org/docs/contributing.html">same contribution model as requirejs</a> and is considered a sub-project of requirejs.</p></article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.06847s from fe3.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/requirejs/domReady/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

