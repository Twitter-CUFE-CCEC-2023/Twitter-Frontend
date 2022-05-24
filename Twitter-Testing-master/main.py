from faulthandler import is_enabled
from lib2to3.pgen2 import driver
from sqlite3 import Time
import unittest
from selenium import webdriver
import page
import time
from locator import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


PATH = "/usr/bin/chromedriver"
testcases=0
passed=0
failed=0
STARTUP_PAGE="https://www.twittercloneteamone.tk"
HOME_PAGE="http://www.twittercloneteamone.tk/home"
Report_signIn = open("sign_in.txt", "a")
Report_signUp = open("sign_up.txt", "a")
Report_profile = open("Profile.txt", "a")
class PythonOrgSearch(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome(PATH)
        self.driver.get(STARTUP_PAGE)
        

   
    
    '''
    def test_case_SIGNUP_click_sign_up_button(self):
        SignUp_page=page.SignUpPage(self.driver)
        global testcases
        global passed
        global failed
        testcases+=1
        #Report_signIn.write("test case=>",testcases)
        Report_signUp.write("SIGN UP PAGE -> test case of Sign up button \n" )
        
        if(SignUp_page.click_sign_up()):
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True         
        else:
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False    
        
        #testing:that the next button is enable or not    # i cant detect the message bec its pop msg and disapper and selenium cant deal with it
   
    def test_case_SIGNUP_by_Gmail(self):
        sign_up=page.loginbyGoogle(self.driver)
        Report_signUp.write("SIGN UP PAGE -> test case of Sign up with google \n" )
        if(sign_up.click_sign_in_with_Gmail()):
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            Report_signUp.write("FAILED\n\n")
            assert False
                
           
        
    
    def test_case_SIGNUP_is_next_Enable(self):
        global testcases
        global passed
        global failed
        testcases+=1
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        Report_signUp.write("SIGN UP PAGE -> test case of is next button is enable without inserting info. \n" )
        #testing:that the next button is enable or not 
        if(SignUp_page.is_NEXT_enable()):
            failed+=1
            Report_signUp.write("FAILED:next button is enable\n\n")
            assert False
        else:
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True       
        
        
        #testing: that text box cant carry more than 50 letters
          
    def test_case_SIGNUP_textboxX50(self): 
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of inserting more than 50 letter in the textbox of the Name \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()   
        SignUp_page.insert_ur_name(SignUpLocators.WRONG_NAMEX50)
        if(SignUp_page.cheack_ur_name_size()):
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            # if it more than 50 letter as ur name
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False    
          
    
        #testing  inserting a wrong email address text box
    def test_case_SIGNUP__wrong_email(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of inserting wrong email \n" ) 
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()       
        SignUp_page.insert_ur_email("1234")
        actualmsg=SignUp_page.check_wrong_msg_email()
        print(actualmsg)
        if actualmsg==SignUpLocators.EXPECTED_MSG_EMAIL:
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED: no error msg when you enter invaild email\n\n")
            assert False
            
        
    def test_case_SIGNUP_phone_link_text(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of check text of phone link \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        if SignUpLocators.PHONE_LINK_TEXT==SignUp_page.check_phone_link():
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False 
     
           
    def test_case_SIGNUP_wrong_phone_number(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of inserting wrong number \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        SignUp_page.click_phone_link()
        SignUp_page.insert_ur_phone(SignUpLocators.WRONG_NAMEX50)
        if SignUpLocators.ERROR_MSG_EMAIL==SignUp_page.check_wrong_msg_email():
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED:no error msg when you enter invaild phone number\n\n")
            assert False    
     
    
    def test_case_SIGNUP_next_enable_after_inserting_wrong_phone(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of checking the next button after inserting wrong phone number \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        SignUp_page.click_phone_link()
        SignUp_page.insert_ur_phone(SignUpLocators.WRONG_NAMEX50)
        SignUp_page.insert_ur_name("testing")
        if(SignUp_page.is_NEXT_enable()):
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False
        else:
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True 
    
    
    def test_case_SIGNUP_cheack_email_link(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of format of  Email link \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        SignUp_page.click_phone_link()
        if SignUpLocators.EMAIL_LINK_TEXT==SignUp_page.check_Email_link():
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False    
         
                   
       
  
            
       
    
    def test_case_SIGNUP_create_account(self): 
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of creating account \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        #when i click on the link it clear my name      
        SignUp_page.insert_ur_name("lucio")     
        SignUp_page.insert_ur_email("alihithem2000@gamil.com")
        SignUp_page.insert_ur_username("lucio")
        SignUp_page.select_gender("Male")
       
        print(SignUp_page.select_age("17","04","2000"))
        time.sleep(6) 
       # SignUp_page.choose_day_month_year()
        SignUp_page.click_NEXT()
        if SignUp_page.click_NEXT_in_next_page():
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False    
    
    def test_case_signUp_cheackYear(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of check years \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        if(SignUp_page.Check_year("2022")):
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED: not all years are exist\n\n")
            assert False  
                 
        
        
             
        
    def test_case_SIGNIN_click_the_button(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of Sign in button \n" )
        Signin_page=page.SignInPage(self.driver)
        if Signin_page.click_sign_in_button():
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False    
    
    
    
    def test_case_SIGNIN_check_error_msg(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of click next without inserting info. \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()
        time.sleep(5)
        Signin_page.click_Next_button()
        if Signin_page.check_alert_msg()==SignInLocators.ALERT_MSG_TEXT:
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False    
     
      
    def test_case_SIGNIN_forget_password(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of functionality forget password button \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()  
        if(Signin_page.click_forget_password()):
            Report_signIn.write("PASSED\n\n") 
        else:
            Report_signIn.write("FAILED: button is not working\n\n")
        
    def test_case_SIGNIN_FORGET_PASSWORD_search_button(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of functionality enable of search button \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()  
        Signin_page.click_forget_password()
        if(Signin_page.is_search_button_enable()):
            Report_signIn.write("FAILED: search button is not enable without info\n\n")
            assert False
        else:
            Report_signIn.write("PASSED\n\n")
            assert True
     
         
    def test_case_SIGNIN_FORGET_PASSWORD_insert_wrong_info(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE(FORGET PASSWORD) -> test case of cheack error msg when enter wrong email in search text \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()  
        Signin_page.click_forget_password()
        Signin_page.foregt_ur_password_insert_info("not working")
        time.sleep(2)
        Signin_page.click_search_button()
        if(Signin_page.check_alert_msg_of_forget_password()==SignInLocators.ALERT_MSG_TEXT):
            Report_signIn.write("PASSED\n\n")
            assert False
        else:
            Report_signIn.write("FAILED : wrong msg \n\n")
            assert True    
                
        
     
    def test_case_SIGNIN_login_enable(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of login button is enable withot info. \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()
        Signin_page.insert_your_info("ellethykhaled2@gmail.com")
        time.sleep(2)
        Signin_page.click_Next_button()
        if (Signin_page.is_login_button_enable()):
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False
        else:
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True    
     
       
    def test_case_SIGNIN_check_wrong_pass(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE(FORGET PASSWORD) -> test case of insert wrong password. \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()
        Signin_page.insert_your_info(StartingPageLocators.USERNAME)
        time.sleep(2)
        Signin_page.click_Next_button()
        Signin_page.insert_your_password("wrong password")
        time.sleep(2)
        Signin_page.click_login()
        if Signin_page.check_error_msg_of_wrong_password()==SignInLocators.WRONG_PASSWORD_TEXT:
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False    
   
    
    def test_case_SIGNIN_FORGET_PASSWORD_forget_password(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of forget password. \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()
        time.sleep(2)
        Signin_page.insert_your_info(StartingPageLocators.USERNAME)
        time.sleep(2)
        Signin_page.click_Next_button()
        Signin_page.click_forget_password_1()
        if Signin_page.foregt_ur_password_insert_info("Wrong password"):
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False    
    
    def test_case_SIGNIN_signup(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case Sign up link from sign in page . \n" )
        Signin_page=page.SignInPage(self.driver)
        SignUp_page=page.SignUpPage(self.driver)
        Signin_page.click_sign_in_button()
        time.sleep(2)
        Signin_page.click_signup()
        if SignUp_page.insert_ur_name("testing"):
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False    
        
   
    def test_case_SIGNIN_FORGET_PASSWORD_forget_password(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of forget password in forget password page. \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()
        Signin_page.click_forget_password_in()
        Signin_page.foregt_ur_password_insert_info(StartingPageLocators.USERNAME)
        time.sleep(2)
        Signin_page.click_search_button()
        if Signin_page.insert_ver_code():
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False                        
    
     
    def test_case_profile_tweet(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> tweet a tweet \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            profile.tweet("hallo")
            profile.click_on_tweet_button()
            time.sleep(5)
        
            #refresh
            profile.click_profile_icon()
            time.sleep(2)
            profile.click_home_icon()
            time.sleep(2)
            profile.click_profile_icon()
            time.sleep(5)
            #refresh
            Report_profile.write("PASSED \n" )
        except:
            Report_profile.write("FAILED \n" )
                
    def test_case_follow_myslef(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> follow myself \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            profile.click_on_my_pic_in_tweet()
            profile.click_on_X_in_tweet()
            if profile.click_on_follow():
               Report_profile.write("FAILED: congratulation you followed yourself XD \n" )  
            else:
                Report_profile.write("PASSED \n\n" )    
        except:
            pass
    
    def test_case_body_of_the_tweet(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> body of the tweet accept more than 280 letter \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            profile.tweet(profilelocators.TWEETX280)
            if profile.cheack_ur_tweet_size():
                Report_profile.write("PASSED \n\n" )
            else:
                Report_profile.write("FALIED : ACCEPT more than 280 letter \n\n" )    
        except:
            pass    
               
    '''    
    def test_case_discard_msg(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> discard msg of the tweet when you cancel it  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            profile.tweet("koko")
            if profile.click_on_discrad_msg:
               Report_profile.write("FALIED : there is no discard msg  \n\n" )
            else:
                Report_profile.write("PASSED  \n\n" )
                    
                
            
            
        except:
            Report_profile.write("FALIED : there is no discard msg  \n\n" )
    
    def log_in(self):
        Signin_page=page.SignInPage(self.driver)
        profile=page.profile(self.driver)
        Signin_page.click_sign_in_button()
        Signin_page.insert_your_info(StartingPageLocators.USERNAME)
        time.sleep(2)
        Signin_page.click_Next_button()
        Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
        time.sleep(2)
        Signin_page.click_login()
        time.sleep(5)   
        profile.click_profile_icon()
        time.sleep(2)
    
    def refresh(self):
        profile=page.profile(self.driver)  
        profile.click_profile_icon()
        time.sleep(2)
        profile.click_home_icon()
        time.sleep(2)
        profile.click_profile_icon()  
    
    
    def tearDown(self):
        time.sleep(2)
        self.driver.close()
        
        
        
if __name__== "__main__":
    unittest.main()
        
        
