import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <section style="border-top: 1px solid #ccc;">
        <div class="container">
          <div class="row mb48 mb-xs-24">
            <div class="col-md-10 col-md-offset-1 col-sm-12 text-center">
              <h4 class="uppercase"><span style="color: #000000;">Fitness content delivered to your inbox</span></h4>
              <p class="mb8"><span style="font-size: 12pt;">Subscribe to our newsletter and don't worry, we hate spam too. <br />We'll only include helpful content to support your fitness and lifestyle goals.</span></p>
            </div>
          </div>
          <div class="row mb40 mb-xs-24">
            <div class="col-sm-12 text-center">
              <section>

                <form class="railscf-form railscf-form-group form__7779" id="edit_plugins_cama_contact_form_cama_contact_form_7779" enctype="multipart/form-data" action="/plugins/cama_contact_form/save_form" accept-charset="UTF-8" method="post">
                  <input name="utf8" type="hidden" value="✓" /><input type="hidden" name="authenticity_token" value="zI+QtaGsh1dpzMc0YxmDzQy07tg1GtjgjgI7bmduJTNtkdf2voHdy8O3+W9dMFDW6nkvJcAYN445tDLYwcu1/A==" />
                  <input type="hidden" name="id" id="id" value="7779" />

                  <div class="col-md-3">
                    <input id="c2" placeholder="First name *" required="true" type="text" value="" name="fields[c2]" class="form-control " />
                  </div>
                  <div class="col-md-3">
                    <input id="c3" placeholder="Last Name *" required="true" type="text" value="" name="fields[c3]" class="form-control " />
                  </div>
                  <div class="col-md-3">
                    <input id="c4" placeholder="Email *" required="true" type="email" value="" name="fields[c4]" class="form-control railscf-field-email" />
                  </div>
                  <div class="col-md-3"><button id="c5" type="submit" name="fields[c5]" class="btn btn-default">Sign Up</button></div>

                </form>
              </section>

            </div>
          </div>
        </div>
      </section>
      <section class="footer-actions text-center">
        <a class="action bg-primary" href="https://www.opexgyms.com/find-a-gym">
          <h4 class="uppercase color-white mb0">
            Find a gym
            <i class="ti-angle-right"></i>
          </h4>
        </a>
        <a class="action" href="https://opexfit.com/own-an-opex-gym/" style="background-color: #ccc;" target="_blank">
          <h4 class="uppercase color-brand-secondary mb0">
            Own a gym
            <i class="ti-angle-right"></i>
          </h4>
        </a>
      </section>
    </div>
  )
}

export default Newsletter
