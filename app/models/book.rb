class Book < ActiveRecord::Base
	has_many :userbooks
	has_many :users, :through => :userbooks


end
