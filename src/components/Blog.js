import React from 'react'

const Blog = () => {
  return (
    <section class="bg-secondary">
      <div class="col-md-10 col-md-offset-1 content title-block">
        <h2 class="uppercase mb40 mb-xs-24 text-center">Recent Articles</h2>
        <hr class="mb40 mb-xs-24 fade-half" />
        <ul>
          <li class="mb40 mb-xs-24">
            <div class="overflow-hidden mb32 text-center">
              <div class="col-sm-4">
                <h5 class="uppercase pt8">16 Aug 2021</h5>
              </div>
              <div class="col-sm-4">
                <h5 class="mb8">
                  <strong>Practical Ways to Increase Daily Movement</strong>
                </h5>
                <span>Daily movement keeps our body functioning properly. To help you fight against the sedentary design of modern life, here are some practical ways to increase your daily movement.</span>
              </div>
              <div class="col-sm-4">
                <a class="btn btn-brand-secondary mt8" href="https://www.opexgyms.com/blog/practical-ways-to-increase-daily-movement">Read</a>
              </div>
            </div>
          </li>
          <li class="mb40 mb-xs-24">
            <div class="overflow-hidden mb32 text-center">
              <div class="col-sm-4">
                <h5 class="uppercase pt8">04 Aug 2021</h5>
              </div>
              <div class="col-sm-4">
                <h5 class="mb8">
                  <strong>How to Get the Most From Your Workout</strong>
                </h5>
                <span>Workouts are a small portion of your week. Thus, you need to make the most of your time. Here are 5 steps to help you get the most out of your workouts.</span>
              </div>
              <div class="col-sm-4">
                <a class="btn btn-brand-secondary mt8" href="https://www.opexgyms.com/blog/how-to-get-the-most-from-your-workout">Read</a>
              </div>
            </div>
          </li>
          <li class="mb40 mb-xs-24">
            <div class="overflow-hidden mb32 text-center">
              <div class="col-sm-4">
                <h5 class="uppercase pt8">21 Jul 2021</h5>
              </div>
              <div class="col-sm-4">
                <h5 class="mb8">
                  <strong>Overrated vs. Underrated: Recovery Edition</strong>
                </h5>
                <span>The “recovery” sector of the fitness industry is worth big bucks. The truth is, we believe most recovery tools are overrated. The good news? Some of the best recovery tools you can use are virtually free.</span>
              </div>
              <div class="col-sm-4">
                <a class="btn btn-brand-secondary mt8" href="https://www.opexgyms.com/blog/overrated-vs-underrated-recovery-edition-1">Read</a>
              </div>
            </div>
          </li>
        </ul>
        <div class="text-center mt64">
          <a class="uppercase color-brand-secondary" href="/blog" style="font-size: 30px;">View all articles</a>
        </div>
      </div>
    </section>
  )
}

export default Blog
