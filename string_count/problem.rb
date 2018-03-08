# Run me with `ruby problem.rb`
require "minitest/autorun"

module Problem
  def self.count_words(word_list)
    # Enter your solution here
  end
end

class TestMeme < Minitest::Test
  def test_simple_list
    word_list = %w[Cannellini baked cannellini kidney]
    assert_equal 'baked 1, cannellini 2, kidney 1', Problem.count_words(word_list)
  end
end
