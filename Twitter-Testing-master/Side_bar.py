import email
from faulthandler import is_enabled
from lib2to3.pgen2 import driver
import unittest
from xml.sax.xmlreader import Locator
from selenium import webdriver
import page
import time
from locator import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

PATH = "E:\\Uni\\Software\\chromedriver"
f = open("Side_Bar_log.txt", "a")

class PythonOrgSearch(unittest.TestCase):
    
    
    def setUp(self):
        self.driver = webdriver.Chrome(PATH)
        self.driver.get("http://www.twittercloneteamone.tk/home")
        self.driver.implicitly_wait(10)
        self.total_tests = 0
        self.pass_tests = 0
        self.failed_tests = 0
        self.driver.find_element_by_xpath(sign_in).click()
        self.driver.find_element_by_xpath(email_field).clear()
        self.driver.find_element_by_xpath(email_field).send_keys("amrzaki2000.az@gmail.com")
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")

        self.driver.find_element_by_xpath(pass_field).clear()
        self.driver.find_element_by_xpath(pass_field).send_keys("12345678")
        
        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")

        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")

        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")

    def test_explore(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nTesting explore button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Explore)
            f.write("Found explore button, proceeding with test \n")
            button.click()
        except:
            f.write("explore button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    def test_notify(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nTesting Notifications button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Notifications)
            f.write("Found Notifications button, proceeding with test \n")
            button.click()
        except:
            f.write("Notifications button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    
    def test_Messages(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nTesting Messages button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Messages)
            f.write("Found Messages button, proceeding with test \n")
            button.click()
        except:
            f.write("Messages button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    def test_bookmark(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nBookmark button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.bookmark)
            f.write("Found Bookmark button, proceeding with test \n")
            button.click()
        except:
            f.write("Bookmark button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    def test_lists(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nLists button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.lists)
            f.write("Found Lists button, proceeding with test \n")
            button.click()
        except:
            f.write("Lists button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    def test_profile(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nprofile button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.profile)
            f.write("Found profile button, proceeding with test \n")
            button.click()
        except:
            f.write("profile button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True
   
    def test_more(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nmore button \n")
        self.total_tests += 1
        self.driver.maximize_window()
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.more)
            f.write("Found more button, proceeding with test \n")
            button.click()
            #button.click()
            #button.click()
        except:
            f.write("more button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            self.driver.find_element_by_xpath(Side_bar_Locators.Settings_more).click()
        except:
            f.write("Couldn't find settings in more \n")
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    def test_Tweet_box(self):
        f.write("\nTweet Box test \n")
        time.sleep(2)
        tweet_box_element = ""
        tweet_box_object= ""
        try:
            tweet_box_element = self.driver.find_element_by_xpath(Side_bar_Locators.tweet_box)
            f.write("Found tweet box button, proceeding with test\n")
            tweet_box_element.click()
        except:
            f.write("Couldn't find tweet box button, aborting test \n")
            assert False

        try:
            tweet_box_object = self.driver.find_element_by_xpath(Side_bar_Locators.tweet_box_itself)
            f.write("Found tweet box, proceeding with test \n")
            assert True
        except:
            f.write("Tweet box didn't open, test aborted \n")
            assert False

    '''
    def test_closing_more_sidebar(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nTesting closing more button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.more)
            f.write("Found more button, proceeding with test \n")
            button.click()
            f.write("Successfully clicked on the more button, proceeding")
        except:
            f.write("more button not found aborting test \n")
            self.failed_tests += 1
            assert False

    '''

    def tearDown(self):
        #f.write("Total tests run : " + str(self.total_tests)+"\n")
        #f.write("Total passed : " + str(self.pass_tests)+"\n")
        #f.write("Total failed : " + str(self.failed_tests)+"\n")
        #f.write("Percentage pass : " + str ((self.pass_tests*1.0 / self.total_tests)*100) + " % \n")
        self.driver.close()  


if __name__== "__main__":
    unittest.main()