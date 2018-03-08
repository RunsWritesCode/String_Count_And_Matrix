# Run me with `ruby problem.rb`
require "minitest/autorun"

module Problem
  def self.diagnal_difference(matrix)
    # Enter your solution here
  end
end

class TestMeme < Minitest::Test
  def test_3x3_case
    matrix = [
      [1,1,1],
      [2,2,2],
      [3,3,3]
    ]
    assert_equal 0, Problem.diagnal_difference(matrix)
  end
  def test_different_3x3_case
    matrix = [
      [1,1,1],
      [2,2,2],
      [3,3,-3]
    ]
    assert_equal 6, Problem.diagnal_difference(matrix)
  end
end
