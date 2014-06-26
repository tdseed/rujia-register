class User < ActiveRecord::Base

  validates_presence_of :phone, :name
  validates_uniqueness_of :phone
end
