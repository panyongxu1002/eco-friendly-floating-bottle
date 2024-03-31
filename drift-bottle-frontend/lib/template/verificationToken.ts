
export const verificationTokenTemplate = (token: string) => `
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Chivo" rel="stylesheet" type="text/css"><!--<![endif]-->
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: inherit !important;
    }

    #MessageViewBody a {
      color: inherit;
      text-decoration: none;
    }

    p {
      line-height: inherit
    }

    .desktop_hide,
    .desktop_hide table {
      mso-hide: all;
      display: none;
      max-height: 0px;
      overflow: hidden;
    }

    .image_block img+div {
      display: none;
    }

    @media (max-width:640px) {
      .desktop_hide table.icons-inner {
        display: inline-block !important;
      }

      .icons-inner {
        text-align: center;
      }

      .icons-inner td {
        margin: 0 auto;
      }

      .mobile_hide {
        display: none;
      }

      .row-content {
        width: 100% !important;
      }

      .stack .column {
        width: 100%;
        display: block;
      }

      .mobile_hide {
        min-height: 0;
        max-height: 0;
        max-width: 0;
        overflow: hidden;
        font-size: 0px;
      }

      .desktop_hide,
      .desktop_hide table {
        display: table !important;
        max-height: none !important;
      }

      .row-1 .column-1 .block-3.paragraph_block td.pad>div {
        font-size: 12px !important;
      }

      .row-1 .column-1 .block-2.paragraph_block td.pad>div {
        font-size: 28px !important;
      }

      .row-1 .column-1 .block-1.paragraph_block td.pad>div {
        font-size: 60px !important;
      }

      .row-1 .column-1 .block-4.button_block a,
      .row-1 .column-1 .block-4.button_block div,
      .row-1 .column-1 .block-4.button_block span {
        font-size: 24px !important;
        line-height: 48px !important;
      }

      .row-1 .column-1 .block-6.heading_block h3 {
        font-size: 16px !important;
      }
    }

  </style>
</head>

<body style="margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;  background-color: #1c2340;">
  <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1c2340;">
    <tbody>
      <tr>
        <td>
          <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url(''); background-position: top center; background-repeat: no-repeat;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 620px; margin: 0 auto;"
                    width="620">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 45px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                          <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                            <tr>
                              <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;">
                                <div
                                  style="color:#efd584;font-family:'Oswald',Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:69px;line-height:120%;text-align:center;mso-line-height-alt:82.8px;">
                                  <p style="margin: 0; word-break: break-word;"><strong>CONFIRM</strong></p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                            <tr>
                              <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                <div
                                  style="color:#FFFFFF;font-family:'Chivo', Arial, Helvetica, sans-serif;font-size:34px;line-height:120%;text-align:center;mso-line-height-alt:40.8px;">
                                  <p style="margin: 0; word-break: break-word;">YOUR</p>
                                  <p style="margin: 0; word-break: break-word;">ACCOUNT</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                            <tr>
                              <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                <div
                                  style="color:#a3a3a3;font-family:'Chivo', Arial, Helvetica, sans-serif;font-size:14px;line-height:180%;text-align:center;mso-line-height-alt:25.2px;">
                                  <p style="margin: 0; word-break: break-word;">&nbsp;Click the button below to activate
                                    your <strong>account</strong></p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="button_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                              <td class="pad">
                                <div class="alignment" align="center"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:70px;width:287px;v-text-anchor:middle;" arcsize="22%" stroke="false" fillcolor="#15c46c">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#ffffff; font-family:Arial, sans-serif; font-size:30px">
<![endif]-->
                                  <a
                                    href="http://localhost:3001/auth/new-verification?token=${token}"
                                    style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#15c46c;border-radius:15px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:'Chivo', Arial, Helvetica, sans-serif;font-size:30px;text-align:center;mso-border-alt:none;word-break:keep-all;">
                                    <span
                                      style="padding-left:50px;padding-right:50px;font-size:30px;display:inline-block;letter-spacing:normal;"><span
                                        style="word-break:break-word;"><span style="line-height: 60px;"
                                          data-mce-style><strong>👉 Click here&nbsp;</strong></span></span></span>
                                  </a>
                                  <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </table>
                          <div class="spacer_block block-5" style="height:60px;line-height:60px;font-size:1px;">&#8202;
                          </div>
                          <table class="heading_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                              <td class="pad">
                                <h3
                                  style="margin: 0; color: #7747FF; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 21px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 25.2px;">
                                  <em><span style="color: #929292;">The link is valid for <span
                                        style="color: #59c527;"><strong>5</strong></span> minutes</span></em></h3>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/115/bg_bottom.jpg'); background-position: top center; background-repeat: repeat;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 620px; margin: 0 auto;"
                    width="620">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                          <div class="spacer_block block-1" style="height:125px;line-height:125px;font-size:1px;">
                            &#8202;</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><!-- End -->
</body>

</html>
`