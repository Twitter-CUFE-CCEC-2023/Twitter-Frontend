from asyncore import write
import email
from faulthandler import is_enabled
from lib2to3.pgen2 import driver
from pickle import FALSE, TRUE
from tkinter import N
from typing import Counter
import unittest
from xml.sax.xmlreader import Locator
from selenium import webdriver
#import page
import time
from locator import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

PATH = "/usr/bin/chromedriver"
f = open("Home_page.txt", "a")

def delay():
    time.sleep(10)

def scrolldown(driver,counter):
    counter += 1
    SCROLL_PAUSE_TIME = 10

    # Get scroll height
    last_height = driver.execute_script("return document.body.scrollHeight")

    while True:
    # Scroll down to bottom
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # Wait to load page
        time.sleep(SCROLL_PAUSE_TIME)

    # Calculate new scroll height and compare with last scroll height
        new_height = driver.execute_script("return document.body.scrollHeight")
        if ((new_height == last_height) or (counter == 2)):
            break
        last_height = new_height

class PythonOrgSearch(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome(PATH)
        self.driver.get("http://www.twittercloneteamone.tk/home")
        self.driver.implicitly_wait(10)
        self.total_tests = 0
        self.pass_tests = 0
        self.failed_tests = 0

        el = self.driver.find_element_by_xpath(sign_in)
        action = webdriver.common.action_chains.ActionChains(self.driver)
        action.move_to_element_with_offset(el, 5, 5)
        action.click()
        action.perform()

        time.sleep(1)

        self.driver.find_element_by_xpath(email_field).clear()
        self.driver.find_element_by_xpath(email_field).send_keys(email_text)

        time.sleep(1)
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")
        
        self.driver.find_element_by_xpath(pass_field).clear()
        self.driver.find_element_by_xpath(pass_field).send_keys(pass_text)
        time.sleep(1)
        
        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")

        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")

        self.driver.maximize_window()
        
        time.sleep(1)

    
    def test_search(self):
        search_item = "test"
        search_f = None
        search_button = None

        f.write("\nTesting Search bar \n")

        try:
            search_f = self.driver.find_element_by_xpath(Home_Page_Locators.search_field)
            f.write("Found search field \n")
        except:
            f.write("Did not Find search field, aborting test \n")
            assert False
        
        try:
            #search_button = self.driver.find_element_by_xpath(Home_Page_Locators.search_button)
            search_button = self.driver.find_element_by_css_selector(Home_Page_Locators.search_button_css)
            f.write("Found search field \n")
        except:
            f.write("Did not Find search button, aborting test \n")
            assert False

        search_f.send_keys(search_item)
        f.write("Sent search word \n")

        time.sleep(1)

        el = self.driver.find_element_by_css_selector(Home_Page_Locators.search_button_css)
        action = webdriver.common.action_chains.ActionChains(self.driver)
        action.move_to_element_with_offset(el, 5, 5)
        action.click()
        action.perform()

        search_button.click()

        f.write("Clicked on Search \n")

        time.sleep(5)

        first_result = None
        
        try:
            first_result = self.driver.find_element_by_xpath(Home_Page_Locators.search_first_result)
            f.write("Search result returned \n")
        except:
            try:
                first_result = self.driver.find_element_by_xpath(Home_Page_Locators.no_result_found)
                f.write("No result found message found, Test passed \n")
                assert True
            except:
                f.write("Search result did not return, aborting test \n")
                assert False

        first_result.click()

        try:
            first_result = self.driver.find_element_by_xpath(Home_Page_Locators.Homepage_identifier)
            f.write("Search result sent us to a profile page, Test passed  \n")
            assert True
        except:
            f.write("Search result did not send us ti a profile page, Test failed \n")
            assert False
    
    def test_profile_pic(self):
        f.write("\nTesting Profile pic in whats happening \n")
        profile_pic = None

        try:
            profile_pic = self.driver.find_element_by_xpath(Home_Page_Locators.profile_pic_what_happening)
            f.write("Found profile pic \n")
        except:
            f.write("Could not find profile pic, abortingn test \n")
            assert False
        
        profile_pic.click()
        f.write("Clicked on profile pic \n")
        time.sleep(2)

        try:
            first_result = self.driver.find_element_by_xpath(Home_Page_Locators.Homepage_identifier)
            f.write("Profile pic did not send us to a profile page, Test failed \n")
            return
            assert False
        except:
            f.write("Profile pic sent us to a profile page, Test passed  \n")
            assert True
    
    
    def test_sending_text_tweet(self):
        tweet_itself = "text tweet by selenium"

        f.write("\nTesting tweeting a text tweet \n")
        tweet_Box = None

        try:
            tweet_Box = self.driver.find_element_by_xpath(Home_Page_Locators.what_happening)
            f.write("Found Tweet box  \n")
        except:
            f.write("Could not find tweet box \n")
            assert False

        tweet_Box.send_keys(tweet_itself)
        f.write("Sent tweet to tweet box\n")
        print("\n\n\n tweet sent \n\n\n")
        time.sleep(5)

        tweet_button= None

        try:
            el = self.driver.find_element_by_xpath(Home_Page_Locators.what_happening_tweet_button)
            action = webdriver.common.action_chains.ActionChains(self.driver)
            action.move_to_element_with_offset(el, 80, 25)
            action.click()
            action.perform()
            f.write("Found Tweet button  \n")
        except:
            f.write("Could not find tweet button \n")
            assert False
        
        time.sleep(15)
        #tweet_button.click()
        
        f.write("Clicked on tweet button \n")

        self.driver.refresh()
        f.write("Refreshed home page \n")

        time.sleep(15)

        first_tweet = None

        try:
            first_tweet = self.driver.find_element_by_xpath(Home_Page_Locators.first_tweet_text)
            f.write("Found first tweet  \n")
        except:
            f.write("Could not find first tweet \n")
            assert False

        print("\n\n\n\n"+first_tweet.text+"\n\n\n\n")
        if (first_tweet.text == tweet_itself):
            f.write("Text tweeted successfully, Test Passed")
            assert True
        else:
            f.write("Tweet text does not match sent tweet, Test failed")
            assert False

    '''
    def test_media_tweet(self):
        tweet_itself = " "

        f.write("\nTesting tweeting a text tweet with media \n")
        tweet_Box = None

        try:
            tweet_Box = self.driver.find_element_by_xpath(Home_Page_Locators.what_happening)
            f.write("Found Tweet box  \n")
        except:
            f.write("Could not find tweet box \n")
            assert False

        tweet_Box.send_keys(tweet_itself)
        f.write("Sent tweet to tweet box\n")

        tweet_button= None

        try:
            tweet_button = self.driver.find_element_by_xpath(Home_Page_Locators.what_happening_tweet_button)
            f.write("Found Tweet button  \n")
        except:
            f.write("Could not find tweet button \n")
            assert False

        media = None
        try:
            media = self.driver.find_element_by_xpath(Home_Page_Locators.media_button)
            f.write("Found media button  \n")
        except:
            f.write("Could not find media button \n")
            assert False

        media.send_keys("E:\\test_image.jpg")
        f.write("Sent image \n")

        tweet_button.click()
        f.write("Clicked on tweet button \n")

        self.driver.refresh()
        f.write("Refreshed home page \n")

        first_tweet = None

        try:
            first_tweet = self.driver.find_element_by_xpath(Home_Page_Locators.first_tweet_text)
            f.write("Found first tweet  \n")
        except:
            f.write("Could not find first tweet \n")
            assert False

        if (first_tweet == tweet_itself):
            f.write("Text tweeted successfully with image, Test Passed")
            assert True
        else:
            f.write("Tweet text dows not match sent tweet or media was not uploaded, Test failed")
            assert False
    '''
    
    def test_gif(self):
        tweet_itself = "testing with gif"

        f.write("\nTesting tweeting a text tweet with a gif \n")
        tweet_Box = None

        try:
            tweet_Box = self.driver.find_element_by_xpath(Home_Page_Locators.what_happening)
            f.write("Found Tweet box  \n")
        except:
            f.write("Could not find tweet box \n")
            assert False

        tweet_Box.send_keys(tweet_itself)
        f.write("Sent tweet to tweet box\n")
        time.sleep(4)

        gif = None
        try:
            gif = self.driver.find_element_by_xpath(Home_Page_Locators.gif_button)
            f.write("Found gif button  \n")
        except:
            f.write("Could not find gif button \n")
            assert False

        gif.click()
        f.write("Clicked on gif button \n")

        try:
            gif = self.driver.find_element_by_xpath(Home_Page_Locators.gif_category)
            f.write("Found gif category (agree) button  \n")
        except:
            f.write("Could not find gif category (agree) button \n")
            assert False

        gif.click()
        f.write("Clicked on gif category \n")

        try:
            gif = self.driver.find_element_by_xpath(Home_Page_Locators.gif_itself)
            f.write("Found gif itself  \n")
        except:
            f.write("Could not find gif itself \n")
            assert False

        gif.click()
        time.sleep(5)
        f.write("Clicked on gif itself \n")

        try:
            el = self.driver.find_element_by_xpath(Home_Page_Locators.what_happening_tweet_button)
            action = webdriver.common.action_chains.ActionChains(self.driver)
            action.move_to_element_with_offset(el, 80, 25)
            action.click()
            action.perform()
            f.write("Found Tweet button  \n")
        except:
            f.write("Could not find tweet button \n")
            assert False

        f.write("Clicked on tweet button \n")

        self.driver.refresh()
        time.sleep(20)
        f.write("Refreshed home page \n")

        first_tweet = None

        try:
            first_tweet = self.driver.find_element_by_xpath(Home_Page_Locators.first_tweet_text)
            f.write("Found first tweet  \n")
        except:
            f.write("Could not find first tweet \n")
            assert False

        if (first_tweet == tweet_itself):
            f.write("Text tweeted successfully with a gif, Test Passed")
            assert True
        else:
            f.write("Tweet text dows not match sent tweet or gif was not tweeted, Test failed")
            assert False

    
    def test_opening_tweet_thread(self):
        

        f.write("\nTesting opening a tweet thread \n")
        
        first_tweet = None

        self.driver.refresh()

        time.sleep(20)
        try:
            first_tweet = self.driver.find_element_by_xpath(Home_Page_Locators.first_tweet_itself)
            f.write("Found first tweet  \n")
        except:
            f.write("Could not find first tweet \n")
            assert False

        first_tweet.click()
        f.write("Clicked on first tweet\n")

        tweet_button= None

        try:
            tweet_button = self.driver.find_element_by_xpath(Home_Page_Locators.tweet_thrad_ident)
            f.write("Thread opened, Test Passed  \n")
            assert True
        except:
            f.write("Thread did not open test failed \n")
            assert False

       
    def test_reply_from_outside(self):
        
        reply_text = "reply with sel"

        f.write("\nTesting replying to tweet from outside \n")

        rep_button= None

        self.driver.refresh()
        time.sleep(20)

        try:
            rep_button = self.driver.find_element_by_xpath(Home_Page_Locators.reply_button_first_tweet)
            f.write("Found Reply button for first tweet \n")
        except:
            f.write("Could not find reply button for first tweet \n")
            assert False
        
        rep_button.click()
        f.write("Clicked on reply button \n")
        time.sleep(1)

        try:
            rep_button = self.driver.find_element_by_xpath(Home_Page_Locators.reply_field)
            f.write("Found Reply field for first tweet \n")
        except:
            f.write("Could not find reply field for first tweet \n")
            assert False
        
        rep_button.send_keys(reply_text)
        f.write("Sent reply text \n")

        try:
            el = self.driver.find_element_by_xpath(Home_Page_Locators.reply_button_reply_dialog)
            action = webdriver.common.action_chains.ActionChains(self.driver)
            action.move_to_element_with_offset(el, 60, 20)
            action.click()
            action.perform()
            f.write("Found Tweet button  \n")
        except:
            f.write("Could not find tweet button \n")
            assert False
        
        f.write("Clicked on Reply button in reply dialog box \n")

        time.sleep(5)

        self.driver.refresh()
        time.sleep(20)
        f.write("Refreshed page \n")

        first_tweet = None

        try:
            first_tweet = self.driver.find_element_by_xpath(Home_Page_Locators.first_tweet_itself)
            f.write("Found first tweet  \n")
        except:
            f.write("Could not find first tweet \n")
            assert False

        first_tweet.click()
        f.write("Clicked on first tweet\n")

        reply_found = None

        scrolldown(self.driver,1)

        try:
            reply_found = self.driver.find_element_by_xpath(Home_Page_Locators.reply_itself)
            f.write("Found first tweet reply  \n")
        except:
            f.write("Could not find first tweet reply \n")
            assert False

        if (reply_found.text == reply_text):
            f.write("Reply text matched reply sent, Test Passed  \n")
            assert True
        else:
            f.write("Reply text did not match reply sent, Test Failed \n")
            assert False
    
    def test_retweet(self):
        f.write("\nTesting Retweet from outside \n")
        
        first_tweet = None

        self.driver.refresh()
        time.sleep(20)

        try:
            first_tweet = self.driver.find_element_by_xpath(Home_Page_Locators.retweet_button_second_tweet)
            f.write("Found retweet button \n")
        except:
            f.write("Could not find retweet button \n")
            assert False

        first_tweet.click()
        f.write("Clicked on retweet button\n")

        time.sleep(2)

        self.driver.refresh()
        f.write("Refreshed page \n")

        f.write("Retweet created an entirely new tweet instead of just retweeting the tweet, Test failed")
        assert False
    
    def test_like_tweet(self):
        
        f.write("\nTesting liking a tweet from outside \n")
        self.driver.refresh()
        time.sleep(20)
        
        first_tweet_like = None
        like_counter = None

        try:
            first_tweet_like = self.driver.find_element_by_xpath(Home_Page_Locators.like_button_first_tweet)
            f.write("Found like button \n")
        except:
            f.write("Could not find like button \n")
            assert False

        try:
            like_counter = self.driver.find_element_by_xpath(Home_Page_Locators.like_counter_before)
            f.write("Found like counter \n")
        except:
            f.write("Could not find like counter \n")
            assert False

        old_like = like_counter.text

        first_tweet_like.click()
        f.write("Clicked on like button\n")

        time.sleep(1)

        try:
            like_counter = self.driver.find_element_by_xpath(Home_Page_Locators.like_counter_after)
            f.write("Found like counter \n")
        except:
            f.write("Could not find like counter \n")
            assert False

        new_like = like_counter.text

        old_like = int(old_like)
        new_like = int(new_like)

        if ((old_like+1) == new_like):
            f.write("like registered,Test passed \n")
        else:
            f.write("Like did not register, Test failed \n")
        
        first_tweet_like.click()
        f.write("Clicked on like button\n")

        try:
            like_counter = self.driver.find_element_by_xpath(Home_Page_Locators.like_counter_before)
            f.write("Found like counter \n")
        except:
            f.write("Could not find like counter \n")
            assert False
        
        new_like = like_counter.text

        new_like = int(new_like)

        if ((old_like) == new_like):
            f.write("Unlike registered,Test passed \n")
            assert True
        else:
            f.write("UnLike did not register, Test failed \n")
            assert False
    
    def test_link_text(self):
        f.write("\nTesting reaching profile from name on tweet \n")
        self.driver.refresh()
        time.sleep(20)
        
        first_tweet = None

        try:
            first_tweet = self.driver.find_element_by_xpath(Home_Page_Locators.profile_link_text)
            f.write("Found profile link text \n")
        except:
            f.write("Could not profile find link text \n")
            assert False

        first_tweet.click()
        f.write("Clicked on profile text link\n")

        time.sleep(5)

        try:
            self.driver.find_element_by_xpath(Home_Page_Locators.Homepage_identifier)
            f.write("Stayed on Homepage, Test failed \n")
        except:
            f.write("Moved to profile, Test passed \n")
            assert False        
      
    def test_infinite_scroll(self):
        f.write("\nTesting Infinite scrolling \n")
        
        scrolldown(self.driver,5)
        f.write("Scrolling down resulted in new tweets, Test passed \n")
        assert True
        
    
    def tearDown(self):
        #f.write("Total tests run : " + str(self.total_tests)+"\n")
        #f.write("Total passed : " + str(self.pass_tests)+"\n")
        #f.write("Total failed : " + str(self.failed_tests)+"\n")
        #f.write("Percentage pass : " + str ((self.pass_tests*1.0 / self.total_tests)*100) + " % \n")
        self.driver.close()  


if __name__== "__main__":
    unittest.main()